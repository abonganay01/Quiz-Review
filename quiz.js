/**
 * quiz.js
 * - All UI and quiz logic is encapsulated in the global `Quiz` namespace.
 * - Depends on window.QUIZ_DATA (questions.js) being loaded before this file.
 *
 * Drop this file next to index.html and questions.js.
 */

const Quiz = (function () {
  // --- Config & state ---
  const DEFAULT_TIME_LIMIT_MINUTES = 60;
  let currentTimeLimitMinutes = DEFAULT_TIME_LIMIT_MINUTES;
  let timerInterval = null;
  let timeRemaining = DEFAULT_TIME_LIMIT_MINUTES * 60;
  let currentMode = 'practice';
  let quizActive = false;
  let renderedQuizData = [];
  let currentCategoryLabel = 'All Topics';

  // Cached DOM
  const dom = {
    quizContainer: document.getElementById('quiz-container'),
    quizIntro: document.getElementById('quiz-intro'),
    quizHeader: document.getElementById('quiz-header'),
    submitButton: document.getElementById('submit-button'),
    results: document.getElementById('results'),
    timerDisplay: document.getElementById('timer-display'),
    currentModeDisplay: document.getElementById('current-mode-display'),
    startBtn: document.getElementById('startBtn'),
    categoryCheckboxes: document.getElementById('category-checkboxes'),
    examCategoryCheckboxes: document.getElementById('exam-category-checkboxes'),
    modeDescription: document.getElementById('mode-description'),
    examDurationSelect: document.getElementById('exam-duration-select'),
    examDurationWrapper: document.getElementById('exam-duration-wrapper'),
  };

  const CATEGORY_LABELS = {
    OSI_DATA_COMMS: 'OSI Model & Data Comms',
    HW_CABLING_TOOLS: 'Hardware, Cabling & Tools',
    IP_ADDRESSING_SUBNET: 'IP Addressing & Subnetting',
    EXERCISE_OSI_TCP_IP: 'Exercises - OSI & TCP/IP',
    RF_ANTENNAS_WAVES: 'RF, Antennas & Waves',
    POWER_AND_VOLTAGE_CONVERSIONS: 'Power & Voltage Conversions',
    AMPLIFIERS_FILTERS_AND_CIRCUITS: 'Amplifiers, Filters & Circuits',
    MODULATION_THEORY: 'Modulation Theory',
    SIGNAL_SPECTRA_IDENTIFICATION: 'Signal Spectra Identification',
    LAW_RA10844: 'RA 10844 – DICT Act',
    LAW_RA11363: 'RA 11363 – Phil Space Act',
    LAW_RA11934: 'RA 11934 – SIM Registration',
    LAW_RA3846: 'RA 3846 – Radio Control Law',
    LAW_RA7925: 'RA 7925 – Public Telecom Policy',
    LAW_RA12234: 'RA 12234 – Konektadong Pinoy Act',
    LAW_RA9292: 'RA 9292 – Electronics Engineering Law'
  };

  // --- Utilities ---
  function getQuizDataStore() {
    return window.QUIZ_DATA && typeof window.QUIZ_DATA === 'object' ? window.QUIZ_DATA : {};
  }

  function getAvailableCategoryKeys() {
    const quizData = getQuizDataStore();
    return Object.keys(quizData).filter(key => key !== 'ALL' && key !== 'LAW_ALL' && Array.isArray(quizData[key]));
  }

  function getCategoryGroups() {
    const keys = getAvailableCategoryKeys();
    return {
      technical: keys.filter(key => !key.startsWith('LAW_')),
      law: keys.filter(key => key.startsWith('LAW_'))
    };
  }

  function formatCategoryLabel(key) {
    if (CATEGORY_LABELS[key]) return CATEGORY_LABELS[key];

    if (key.startsWith('LAW_')) {
      const humanized = key
        .slice(4)
        .replace(/_/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
      return humanized ? `RA ${humanized}` : 'Law Category';
    }

    return key
      .replace(/_/g, ' ')
      .replace(/\b\w/g, char => char.toUpperCase());
  }

  function getQuestionsForSelection(keys) {
    const quizData = getQuizDataStore();

    if (!Array.isArray(keys) || keys.length === 0) {
      return Array.isArray(quizData.ALL) ? quizData.ALL.slice() : [];
    }

    if (keys.includes('ALL')) {
      return Array.isArray(quizData.ALL) ? quizData.ALL.slice() : [];
    }

    const selected = new Set(keys);
    const combined = [];

    selected.forEach(key => {
      if (key === 'EXAM_LAWS') {
        if (Array.isArray(quizData.LAW_ALL)) combined.push(...quizData.LAW_ALL);
        return;
      }

      if (Array.isArray(quizData[key])) {
        combined.push(...quizData[key]);
      }
    });

    return combined;
  }

  function getCategoryLabelForSelection(keys) {
    if (!Array.isArray(keys) || keys.length === 0) return 'All Topics';
    if (keys.includes('ALL')) return 'All Topics';

    const labels = keys
      .filter(key => key !== 'EXAM_LAWS')
      .map(formatCategoryLabel)
      .filter(Boolean);

    if (keys.includes('EXAM_LAWS')) labels.push('Telecom & ICT Laws (All RAs)');

    return labels.length > 0 ? labels.join(', ') : 'All Topics';
  }

  function sanitizeQuestion(item) {
    if (!item || typeof item !== 'object') return null;

    const question = typeof item.q === 'string' ? item.q.trim() : '';
    const answer = typeof item.a === 'string' ? item.a.trim() : '';
    const options = Array.isArray(item.options)
      ? item.options
          .filter(option => typeof option === 'string' && option.trim())
          .map(option => option.trim())
      : [];

    if (!question || !answer || options.length === 0) return null;

    return { q: question, a: answer, options };
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  function updateTimerDisplay() {
    if (!dom.timerDisplay) return;
    dom.timerDisplay.textContent = formatTime(timeRemaining);
    if (timeRemaining <= 300) dom.timerDisplay.classList.add('timer-warning');
    else dom.timerDisplay.classList.remove('timer-warning');
  }

  function getSelectedTimeLimitMinutes() {
    if (!dom.examDurationSelect) return DEFAULT_TIME_LIMIT_MINUTES;

    const selected = Number(dom.examDurationSelect.value);
    if (!Number.isFinite(selected) || selected <= 0) {
      return DEFAULT_TIME_LIMIT_MINUTES;
    }

    return selected;
  }

  function syncExamTimerPreview() {
    currentTimeLimitMinutes = getSelectedTimeLimitMinutes();
    timeRemaining = currentTimeLimitMinutes * 60;
    updateTimerDisplay();
  }

  function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    currentTimeLimitMinutes = getSelectedTimeLimitMinutes();
    timeRemaining = currentTimeLimitMinutes * 60;
    updateTimerDisplay();
    timerInterval = setInterval(() => {
      timeRemaining--;
      updateTimerDisplay();
      if (timeRemaining <= 0) stopQuiz(true);
    }, 1000);
  }

  // --- Mode & UI toggles ---
  function setMode(mode) {
    if (quizActive) return;
    currentMode = mode;
    // update UI classes
    const pBtn = document.getElementById('practice-btn');
    const eBtn = document.getElementById('exam-btn');

    if (mode === 'practice') {
      pBtn.className = "flex-1 sm:flex-none py-3 px-4 md:px-8 rounded-lg text-sm font-semibold transition-all duration-200 shadow-sm bg-white dark:bg-gray-600 text-primary dark:text-indigo-300";
      eBtn.className = "flex-1 sm:flex-none py-3 px-4 md:px-8 rounded-lg text-sm font-semibold transition-all duration-200 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200";
      document.getElementById('category-selection').style.display = 'block';
      document.getElementById('exam-category-selection').style.display = 'none';
      if (dom.examDurationWrapper) dom.examDurationWrapper.classList.add('hidden');
      dom.modeDescription.innerHTML = 'In <strong>Practice Mode</strong>, you get instant feedback.';
      dom.startBtn.textContent = 'Start Practice Session';
      dom.currentModeDisplay.textContent = 'Practice';
    } else {
      pBtn.className = "flex-1 sm:flex-none py-3 px-4 md:px-8 rounded-lg text-sm font-semibold transition-all duration-200 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200";
      eBtn.className = "flex-1 sm:flex-none py-3 px-4 md:px-8 rounded-lg text-sm font-semibold transition-all duration-200 shadow-sm bg-white dark:bg-gray-600 text-primary dark:text-indigo-300";
      document.getElementById('category-selection').style.display = 'none';
      document.getElementById('exam-category-selection').style.display = 'block';
      if (dom.examDurationWrapper) dom.examDurationWrapper.classList.remove('hidden');
      dom.modeDescription.innerHTML = 'In <strong>Exam Mode</strong>, answers are locked until submission.';
      dom.startBtn.textContent = 'Start Official Exam';
      dom.currentModeDisplay.textContent = 'Exam';
      syncExamTimerPreview();
    }
  }

  // --- Category rendering & helpers ---
  function renderCategoryCheckboxes() {
    const container = dom.categoryCheckboxes;
    container.innerHTML = '';

    const createSection = (title, items) => {
      if (title) {
        const header = document.createElement('h3');
        header.className = 'text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider pl-1';
        header.textContent = title;
        container.appendChild(header);
      }

      const grid = document.createElement('div');
      grid.className = 'grid grid-cols-1 gap-2 mb-5';

      items.forEach(item => {
        const wrapper = document.createElement('label');
        wrapper.className = 'flex items-center p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer hover:bg-indigo-50 dark:hover:bg-gray-700/50 hover:border-indigo-200 transition-all active:bg-indigo-100';
        wrapper.htmlFor = `cat-${item.key}`;

        const input = document.createElement('input');
        input.type = 'checkbox';
        input.id = `cat-${item.key}`;
        input.value = item.key;
        input.className = 'cat-checkbox mr-3';
        input.name = 'category-mix';

        const span = document.createElement('span');
        span.className = 'text-sm font-medium text-gray-700 dark:text-gray-200 select-none';
        span.textContent = item.label;

        wrapper.appendChild(input);
        wrapper.appendChild(span);
        grid.appendChild(wrapper);
      });

      container.appendChild(grid);
    };

    const { technical, law } = getCategoryGroups();

    if (technical.length > 0) {
      createSection('Technical Topics', technical.map(key => ({ key, label: formatCategoryLabel(key) })));
    }

    if (law.length > 0) {
      createSection('Legal & Regulatory', law.map(key => ({ key, label: formatCategoryLabel(key) })));
    }
  }

  function renderExamCategoryCheckboxes() {
    const container = dom.examCategoryCheckboxes;
    container.innerHTML = '';

    const createExamSection = (title, items) => {
      if (title) {
        const header = document.createElement('h4');
        header.className = 'text-xs font-semibold text-red-800 dark:text-red-200 mb-2 mt-4 uppercase';
        header.textContent = title;
        container.appendChild(header);
      }

      const grid = document.createElement('div');
      grid.className = 'grid grid-cols-1 gap-2 mb-2';

      items.forEach(item => {
        const wrapper = document.createElement('label');
        wrapper.className = 'flex items-center p-3 bg-white dark:bg-gray-800 border border-red-100 dark:border-gray-700/50 rounded-lg cursor-pointer hover:bg-red-50 dark:hover:bg-red-900/10 hover:border-red-200 transition-all active:bg-red-100';
        wrapper.htmlFor = `examcat-${item.key}`;

        const input = document.createElement('input');
        input.type = 'checkbox';
        input.id = `examcat-${item.key}`;
        input.value = item.key;
        input.className = 'cat-checkbox mr-3 accent-red-600';
        input.name = 'exam-category-mix';

        const span = document.createElement('span');
        span.className = 'text-sm font-medium text-gray-800 dark:text-gray-200 select-none';
        span.textContent = item.label;

        wrapper.appendChild(input);
        wrapper.appendChild(span);
        grid.appendChild(wrapper);
      });

      container.appendChild(grid);
    };

    const { technical, law } = getCategoryGroups();
    const examItems = [{ key: 'ALL', label: 'All Topics (Everything)' }];

    if (law.length > 0) {
      examItems.push({ key: 'EXAM_LAWS', label: 'Telecom & ICT Laws (All RAs)' });
    }

    examItems.push(...technical.map(key => ({ key, label: formatCategoryLabel(key) })));

    createExamSection('', examItems);
  }

  function toggleAllCategoryCheckboxes(state) {
    document.querySelectorAll('#category-checkboxes input[type="checkbox"]').forEach(cb => cb.checked = state);
  }

  function toggleAllExamCheckboxes(state) {
    document.querySelectorAll('#exam-category-checkboxes input[type="checkbox"]').forEach(cb => cb.checked = state);
  }

  function getSelectedCategoriesForPractice() {
    const checked = Array.from(document.querySelectorAll('#category-checkboxes input[type="checkbox"]:checked')).map(n => n.value);
    if (checked.length > 0) return checked;
    return getAvailableCategoryKeys();
  }

  function getSelectedCategoriesForExam() {
    const checked = Array.from(document.querySelectorAll('#exam-category-checkboxes input[type="checkbox"]:checked')).map(n => n.value);
    if (checked.length > 0) return checked;
    return ['ALL'];
  }

  function prepareQuizData(data) {
    const sanitized = (data || [])
      .map(sanitizeQuestion)
      .filter(Boolean)
      .map(item => ({
        ...item,
        options: [...item.options]
      }));

    shuffleArray(sanitized);

    sanitized.forEach(question => {
      shuffleArray(question.options);
    });

    return sanitized;
  }

  // --- Quiz lifecycle ---
  function startQuiz() {
    const selectedCategories = currentMode === 'practice'
      ? getSelectedCategoriesForPractice()
      : getSelectedCategoriesForExam();

    currentCategoryLabel = getCategoryLabelForSelection(selectedCategories);
    const baseData = getQuestionsForSelection(selectedCategories);

    if (!Array.isArray(baseData) || baseData.length === 0) {
      renderedQuizData = [];
    } else {
      renderedQuizData = prepareQuizData(baseData);
    }

    // UI transitions
    dom.quizIntro.style.display = 'none';
    dom.quizHeader.style.display = 'flex';
    dom.quizContainer.style.display = 'block';
    dom.submitButton.style.display = 'block';
    dom.results.style.display = 'none';

    quizActive = true;
    renderQuiz(renderedQuizData);

    if (currentMode === 'exam') {
      dom.timerDisplay.style.visibility = 'visible';
      startTimer();
    } else {
      dom.timerDisplay.style.visibility = 'hidden';
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function exitQuiz() {
    if (timerInterval) clearInterval(timerInterval);
    quizActive = false;

    dom.quizIntro.style.display = 'block';
    dom.quizHeader.style.display = 'none';
    dom.quizContainer.style.display = 'none';
    dom.submitButton.style.display = 'none';
    dom.results.style.display = 'none';

    const submitBtn = dom.submitButton;
    submitBtn.disabled = false;
    submitBtn.textContent = "Submit Quiz and Get Score";

    renderedQuizData = [];
    renderQuiz([]);
    setMode(currentMode);
  }

  function submitQuiz() {
    stopQuiz(false);
  }

  function stopQuiz(isTimeout) {
    if (!quizActive) return;
    if (timerInterval) clearInterval(timerInterval);
    quizActive = false;

    const total = renderedQuizData.length;
    let score = 0;

    if (dom.timerDisplay) dom.timerDisplay.style.visibility = 'visible';
    if (isTimeout && dom.timerDisplay) dom.timerDisplay.textContent = '00:00';

    renderedQuizData.forEach((item, index) => {
      const card = document.getElementById(`q-${index}`);
      if (!card) return;

      const selectedRadio = card.querySelector(`input[name="question-${index}"]:checked`);
      const feedbackEl = card.querySelector('.feedback');
      const userSelected = selectedRadio ? selectedRadio.value : null;
      const isCorrect = userSelected === item.a;

      card.classList.remove('correct-answer', 'wrong-answer');
      card.querySelectorAll('.option-label').forEach(label => {
        label.classList.remove('correct-option', 'incorrect-option', 'disabled');
      });

      feedbackEl.classList.remove('correct-text', 'incorrect-text');

      if (isCorrect) {
        score++;
        card.classList.add('correct-answer');
        feedbackEl.innerHTML = `<div class="flex items-center">
            <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Correct!</span>
          </div>`;
        feedbackEl.classList.add('correct-text');
      } else {
        card.classList.add('wrong-answer');
        feedbackEl.innerHTML = userSelected
          ? `<div class="mb-1">❌ Incorrect.</div><div class="text-sm font-normal text-gray-700 dark:text-gray-300">Answer: <strong class="text-gray-900 dark:text-white font-fix">${item.a}</strong></div>`
          : `<div class="mb-1">⚠️ Unanswered.</div><div class="text-sm font-normal text-gray-700 dark:text-gray-300">Answer: <strong class="text-gray-900 dark:text-white font-fix">${item.a}</strong></div>`;
        feedbackEl.classList.add('incorrect-text');
      }

      feedbackEl.style.display = 'block';

      card.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.disabled = true;
        const label = radio.parentElement.parentElement;
        label.classList.add('disabled');

        if (radio.value === item.a) {
          label.classList.add('correct-option');
        } else if (radio.checked && !isCorrect) {
          label.classList.add('incorrect-option');
        }
      });
    });

    dom.submitButton.style.display = 'none';
    dom.quizHeader.style.display = 'none';

    document.getElementById('final-mode-display').textContent = currentMode === 'exam' ? 'Exam' : 'Practice';
    document.getElementById('score-display').textContent = `${score}/${total}`;
    document.getElementById('category-score-breakdown').textContent = `Topic(s): ${currentCategoryLabel} (${total} Questions)`;

    dom.results.style.display = 'block';
    dom.results.scrollIntoView({ behavior: 'smooth' });
  }

  // --- Rendering quiz ---
  function renderQuiz(data) {
    if (!dom.quizContainer) return;
    dom.quizContainer.innerHTML = '';

    (data || []).forEach((item, index) => {
      const qContainer = document.createElement('div');
      qContainer.className = 'question-card bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6 mb-4 sm:mb-6 transition-all';
      qContainer.id = `q-${index}`;
      qContainer.dataset.correctAnswer = item.a;

      const qHeader = document.createElement('div');
      qHeader.className = 'flex items-start mb-4';

      const qNum = document.createElement('span');
      qNum.className = 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-medium px-2 py-1 rounded mr-3 mt-1 min-w-[2rem] text-center';
      qNum.textContent = `${index + 1}`;

      const qText = document.createElement('h3');
      qText.className = 'text-base sm:text-lg font-medium text-gray-800 dark:text-gray-100 leading-snug';
      qText.textContent = item.q;

      qHeader.appendChild(qNum);
      qHeader.appendChild(qText);
      qContainer.appendChild(qHeader);

      const optionsContainer = document.createElement('div');
      optionsContainer.className = 'space-y-3 pl-0 sm:pl-2';

      item.options.forEach((option, oIndex) => {
        const label = document.createElement('label');
        label.className = 'option-label flex items-center p-4 rounded-lg border-2 border-transparent bg-gray-50 dark:bg-gray-700/50 hover:bg-indigo-50 dark:hover:bg-gray-600 hover:border-indigo-100 dark:hover:border-gray-500 cursor-pointer transition-all group active:scale-[0.99]';
        label.setAttribute('for', `q${index}-o${oIndex}`);

        const radioWrapper = document.createElement('div');
        radioWrapper.className = 'relative flex-shrink-0 flex items-center justify-center w-6 h-6 mr-4 border-2 border-gray-300 dark:border-gray-500 rounded-full group-hover:border-primary transition-colors';

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `question-${index}`;
        input.id = `q${index}-o${oIndex}`;
        input.value = option;
        input.className = 'opacity-0 absolute w-full h-full cursor-pointer z-10';

        const dot = document.createElement('div');
        dot.className = 'w-3 h-3 bg-primary rounded-full transform scale-0 transition-transform duration-200 visual-dot';

        input.addEventListener('change', () => {
          optionsContainer.querySelectorAll('.visual-dot').forEach(d => d.classList.remove('scale-100'));
          optionsContainer.querySelectorAll('.visual-dot').forEach(d => d.classList.add('scale-0'));
          dot.classList.remove('scale-0');
          dot.classList.add('scale-100');

          const allLabels = optionsContainer.querySelectorAll('label');
          allLabels.forEach(l => {
            l.classList.remove('border-primary', 'bg-indigo-50', 'dark:bg-gray-600');
            l.classList.add('border-transparent', 'bg-gray-50', 'dark:bg-gray-700/50');
          });

          label.classList.remove('border-transparent', 'bg-gray-50', 'dark:bg-gray-700/50');
          label.classList.add('border-primary', 'bg-indigo-50', 'dark:bg-gray-600');
        });

        radioWrapper.appendChild(input);
        radioWrapper.appendChild(dot);

        if (currentMode === 'practice') {
          input.addEventListener('change', () => checkAnswerLive(qContainer));
        }

        const textSpan = document.createElement('span');
        textSpan.className = 'text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium group-hover:text-gray-900 dark:group-hover:text-white leading-tight';
        textSpan.textContent = option;

        label.appendChild(radioWrapper);
        label.appendChild(textSpan);
        optionsContainer.appendChild(label);
      });

      qContainer.appendChild(optionsContainer);

      const feedback = document.createElement('div');
      feedback.className = 'feedback mt-4 p-4 rounded-lg hidden text-base animate-fade-in';
      qContainer.appendChild(feedback);

      dom.quizContainer.appendChild(qContainer);
    });
  }

  function checkAnswerLive(questionCard) {
    if (currentMode !== 'practice') return;

    const correctAnswer = questionCard.dataset.correctAnswer;
    const feedbackEl = questionCard.querySelector('.feedback');
    const selectedRadio = questionCard.querySelector('input[type="radio"]:checked');
    const selectedValue = selectedRadio ? selectedRadio.value : null;

    questionCard.classList.remove('correct-answer', 'wrong-answer');
    questionCard.querySelectorAll('.option-label').forEach(label => {
      label.classList.remove('correct-option', 'incorrect-option', 'disabled');
    });

    if (!selectedValue) return;

    const isCorrect = selectedValue === correctAnswer;
    feedbackEl.classList.remove('correct-text', 'incorrect-text');

    feedbackEl.innerHTML = isCorrect
      ? `<div class="flex items-center text-green-700 dark:text-green-400 font-semibold text-base">
           <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
           </svg> Correct! Great job.
         </div>`
      : `<div class="text-red-700 dark:text-red-400">
           <div class="font-semibold flex items-center mb-1 text-base">
             <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
             </svg>
             Incorrect.
           </div>
           <div class="ml-8 text-base text-gray-800 dark:text-gray-200">Answer: <strong class="font-fix">${correctAnswer}</strong></div>
         </div>`;

    feedbackEl.className = `feedback mt-4 p-4 rounded-lg block animate-fade-in ${isCorrect ? 'bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800' : 'bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800'}`;

    questionCard.classList.add(isCorrect ? 'correct-answer' : 'wrong-answer');

    questionCard.querySelectorAll('input[type="radio"]').forEach(radio => {
      radio.disabled = true;
      const label = radio.parentElement.parentElement;
      label.classList.add('disabled');
      label.classList.remove('hover:bg-indigo-50', 'dark:hover:bg-gray-600', 'cursor-pointer');

      if (radio.value === correctAnswer) {
        label.classList.add('correct-option');
        label.classList.remove('bg-gray-50', 'dark:bg-gray-700/50');
      } else if (radio.checked) {
        label.classList.add('incorrect-option');
        label.classList.remove('bg-gray-50', 'dark:bg-gray-700/50');
      }
    });
  }

  // --- Public API ---
  return {
    init: function () {
      setMode('practice');
      renderCategoryCheckboxes();
      renderExamCategoryCheckboxes();

      if (dom.examDurationSelect) {
        dom.examDurationSelect.addEventListener('change', syncExamTimerPreview);
      }

      // Hook small helpers onto global scope for buttons to call (keeps markup simple)
      window.toggleAllCategoryCheckboxes = toggleAllCategoryCheckboxes;
      window.toggleAllExamCheckboxes = toggleAllExamCheckboxes;
      window.Quiz = this; // allow external calls

      // Map button actions
      window.setMode = setMode;
      window.startQuiz = startQuiz;
      window.exitQuiz = exitQuiz;
      window.submitQuiz = submitQuiz;
    },

    // Expose control functions used by inline onclick attributes
    setMode,
    startQuiz,
    exitQuiz,
    submitQuiz,
    toggleAllCategoryCheckboxes,
    toggleAllExamCheckboxes
  };
})();

// Auto-init when the script loads
window.addEventListener('DOMContentLoaded', () => {
  // Wait a short tick to ensure questions.js loaded
  if (!window.QUIZ_DATA) {
    console.error('QUIZ_DATA missing: ensure questions.js is loaded before quiz.js');
  }
  Quiz.init();
});
