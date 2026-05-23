/**
 * questions.js
 * Full question dataset — rearranged/cleaned:
 * - Exact duplicates that were repeated in EXERCISE_OSI_TCP_IP (and already present in OSI_DATA_COMMS)
 *   were removed from EXERCISE_OSI_TCP_IP so each question appears in the most appropriate category only.
 * - LAW_ALL and ALL are constructed from the single source arrays to avoid duplication.
 */

window.QUIZ_DATA = (function () {
  const data = {

    OSI_DATA_COMMS: [
      { q: "Which standards body created the cables and connector specifications used to support Ethernet implementation?", a: "ΕΙΑ/ΤΙΑ", options: ["ΕΙΑ/ΤΙΑ", "ISO", "ANSI", "IETF"] },
      { q: "What do TIA/EIA stand for?", a: "Telecommunications Industry Association/ Electronic Industries Alliance", options: ["Telephone International Association/Electronic Industries Alliance", "Telecommunications Industry Alliance/Electronic Industries Association", "Telecommunications Industry Association/ Electronic Industries Alliance", "Television Industry Association/Electronic Industries Association"] },
      { q: "Which data flow or transmission mode allows for unidirectional flow of data?", a: "Simplex", options: ["Full duplex", "Simplex", "Duplex", "F/full duplex"] },
      { q: "Which layer in the OSI model is responsible for carrying frames between adjacent nodes?", a: "Data link", options: ["Network", "Transport", "Data link", "Physical"] },
      { q: "A set of rules or procedures that govern how data is shared or sent over a communication media.", a: "Protocol", options: ["Protocol", "Memorandum", "Handover", "Handshake"] },
      { q: "Which layer in the OSI model is responsible for log-in and log-out procedure?", a: "Session", options: ["Session", "Network", "Application", "Transport"] },
      { q: "Which layer in the OSI model is responsible for route determination and selection?", a: "Network", options: ["Physical", "Transport", "Data link", "Network"] },
      { q: "What internet protocol is used to map a known IP address to an unknown MAC address?", a: "ARP", options: ["ICMP", "UDP", "RARP", "ARP"] },
      { q: "Which layer in the OSI model is responsible for format and code conversion services?", a: "Presentation", options: ["Transport", "Application", "Presentation", "Session"] },
      { q: "Which of the following is one of the protocols found at the transport layer?", a: "UDP", options: ["UCP", "UDP", "TDC", "TDP"] },
      { q: "Which data flow or transmission mode allows for bidirectional flow of data simultaneously?", a: "Full duplex", options: ["Simplex", "F/full duplex", "Full duplex", "Duplex"] },
      { q: "An agency of the United Nations whose duties include setting standards for various areas within the communication field. Formerly known as CCITT, it establishes standards to ensure compatibility of telecommunication equipment of different manufacturers.", a: "ITU", options: ["ITU", "IANA", "ISO", "IEEE"] },
      { q: "Which among the physical topologies is considered to be the most reliable?", a: "Mesh", options: ["Star", "Bus", "Ring", "Mesh"] },
      { q: "Which layer in the OSI model is responsible for providing user services such as email and file transfer?", a: "Application", options: ["Transport", "Application", "Network", "Session"] },
      { q: "Recent developments in the multimedia applications has increased the number of users and the amount of time each user spends on the network. What application/platform uses television over IP?", a: "PPLive", options: ["Telephony", "Skype", "YouTube", "PPLive"] },
      { q: "In 1967, at an Association for Computing Machinery (ACM) meeting, ARPA of the USA National Defense presented its ideas for the ARPANET... What does ARPANET mean?", a: "Advanced Research Projects Agency Network", options: ["Advanced Research Protocols Agency Network", "Advanced Research Projects Automatic Network", "Advanced Retransmission Protocols Agency Network", "Advanced Research Projects Agency Network"] },
      { q: "Recent developments in the multimedia applications has increased the number of users and the amount of time each user spends on the network. What application/platform uses video over IP?", a: "YouTube", options: ["Telephony", "Skype", "YouTube", "PPLive"] },
      { q: "It is a group of network devices that allow communication between various connected devices that covers smaller areas such as home, office or schools.", a: "LAN", options: ["LAN", "MAN", "WAN", "Ethernet"] },
      { q: "It is a network bigger than a LAN and covers a city or large campus. It connects several smaller networks in that area.", a: "MAN", options: ["LAN", "MAN", "WAN", "Ethernet"] },
      { q: "Recent developments in the multimedia applications has increased the number of users and the amount of time each user spends on the network. What application/platform uses voice over IP?", a: "Telephony", options: ["Telephony", "Skype", "YouTube", "PPLive"] },
      { q: "In the OSI model, error correction and retransmission are performed by the:", a: "Data link and Transport layer", options: ["Physical and data link layer", "Data link and Network layer", "Data link and Session layer", "Data link and Transport layer"] },
      { q: "In the OSI model, providing independence from different data representation is performed by the:", a: "Presentation layer", options: ["Transport Layer", "Session layer", "Presentation layer", "Application layer"] },
      { q: "In the OSI model, establishing, managing, and terminating sessions are performed by the:", a: "Session layer", options: ["Transport Layer", "Session layer", "Presentation layer", "Application layer"] },
      { q: "In the OSI model, reliable process-to-process delivery is performed by the:", a: "Transport layer", options: ["Physical layer", "Network layer", "Data link layer", "Transport layer"] },
      { q: "In the OSI model, format and code conversion services are performed by the:", a: "Presentation layer", options: ["Transport Layer", "Session layer", "Presentation layer", "Application layer"] },
      { q: "TCP/IP model does not have __ layer but OSI model have this layer.", a: "Session layer", options: ["Transport layer", "Session layer", "Network layer", "Application layer"] },
      { q: "In the OSI model, route determination is performed by the:", a: "Network layer", options: ["Physical layer", "Transport layer", "Data link layer", "Network layer"] },
      { q: "In the OSI model, responsibility for carrying frames between adjacent nodes is performed by the:", a: "Data link layer", options: ["Physical layer", "Network layer", "Data link layer", "Transport layer"] },
      { q: "In the OSI model, defining frames is performed by the:", a: "Data link layer", options: ["Physical layer", "Network layer", "Data link layer", "Transport layer"] },
      { q: "In the OSI model, route selection is performed by the:", a: "Network layer", options: ["Physical layer", "Network layer", "Data link layer", "Transport layer"] },
      { q: "In the OSI model, Interface to transmission media is performed by the:", a: "Physical layer", options: ["Physical layer", "Network layer", "Data link layer", "Transport layer"] },
      { q: "In the OSI model, mechanical, electrical, and functional interface is performed by the:", a: "Physical layer", options: ["Physical layer", "Network layer", "Data link layer", "Transport layer"] },
      { q: "In the OSI model, flow control is (are) performed by the:", a: "Data link and Transport layer", options: ["Physical and data link layer", "Data link and Network layer", "Data link and Session layer", "Data link and Transport layer"] },
      { q: "In the OSI model, providing user services is performed by the:", a: "Application layer", options: ["Transport Layer", "Session layer", "Presentation layer", "Application layer"] },
      { q: "In the OSI model, ensuring reliable transmission of data is (are) performed by the:", a: "Data link and Transport layer", options: ["Physical and data link layer", "Data link and Network layer", "Data link and Transport layer", "Data link and Session layer"] },
      { q: "The OSI model used in data communications is developed by", a: "ISO", options: ["FCC", "IEEE", "ISO", "TCP/IP"] },
      { q: "Federal Communications Commission (FCC) is a regulatory agency... In the Philippines, regulation is primarily vested in", a: "NTC", options: ["IECEP", "IEEE Phil. Section", "NTC", "DICT"] },
      { q: "Which topology has all its nodes connected directly to one center point and has no other connections between nodes?", a: "Star", options: ["Ring", "Star", "Bus", "Mesh"] },
      { q: "An Internet standard is a thoroughly tested specification... Upon recommendation from the Internet authorities, a draft may be published as an RFC. What does RFC mean?", a: "Request for Comment", options: ["Request for Comment", "Request for Connection", "Request for Control", "Repetition for Connection"] },
      { q: "It refers to the variation in packet delay for streaming audio or video packets.", a: "Jitter", options: ["Noise", "Quality of service (QoS)", "Jitter", "Burst"] },
      { q: "It is the biggest type of network, covering very large areas like countries or even the whole world. The internet is its most famous example.", a: "WAN", options: ["LAN", "MAN", "WAN", "Ethernet"] },
      { q: "Recent developments in the multimedia applications has increased the number of users and the amount of time each user spends on the network. What application/platform uses view sharing?", a: "Skype", options: ["Telephony", "Skype", "YouTube", "PPLive"] },
      { q: "In the OSI model, access for the end user is performed by the", a: "Application layer", options: ["Transport Layer", "Session layer", "Presentation layer", "Application layer"] },
      { q: "In the OSI model, transmission of bits across the medium is performed by the", a: "Physical layer", options: ["Physical layer", "Network layer", "Data link layer", "Transport layer"] },
      { q: "In the OSI model, communication with user's application program is performed by the", a: "Application layer", options: ["Transport layer", "Session layer", "Presentation layer", "Application layer"] }
    ],

    HW_CABLING_TOOLS: [
      { q: "What diagnostic utility tool determines the route to a destination by sending Internet Control Message Protocol (ICMP) echo packets to the destination?", a: "Tracert", options: ["Tracert", "Ping", "Nslookup", "Ipconfig", "ipconfig/all"] },
      { q: "It is a basic, yet popular, Windows network command-line utility used to display the basic TCP/IP network configuration of a computer.", a: "Ipconfig", options: ["Nslookup", "Ipconfig", "Tracert", "ping"] },
      { q: "The ping command operates by sending ICMP echo request packets. What does ping stand for?", a: "Packet internet groper", options: ["Protocol internet groper", "Packet internet groper", "Protocol industry group", "Packet instruction group"] },
      { q: "It is a network administration command-line tool used to retrieve all TCP/IP network information and configuration of a computer including its MAC address, adapter description, and DHCP details.", a: "ipconfig/all", options: ["ipconfig/all", "Ping", "Tracert", "Nslookup", "ipconfig"] },
      { q: "It is a network administration command-line tool used for querying the Domain Name System (DNS) to obtain domain name or IP address mapping information.", a: "Nslookup", options: ["Nslookup", "Tracert", "ipconfig/all", "Ping"] },
      { q: "What basic network command is used to test a device’s network connectivity?", a: "ping", options: ["Ipconfig", "tracert", "Nslookup", "ping"] },
      { q: "What is an advantage that coaxial cable has over STP or UTP?", a: "It can run for a longer distance unboosted", options: ["It can run for a longer distance unboosted", "It is inexpensive.", "None of the choices.", "It is capable of achieving 10 Mbps to 100Mpbs"] },
      { q: "What type of connector is used for DSL connection?", a: "RJ-11", options: ["RJ-45", "F", "AUI", "RJ-11"] },
      { q: "What type of connector is used to connect a router and a cable system?", a: "F", options: ["RJ-11", "AUI", "F", "RJ-45"] },
      { q: "Which connector does a UTP use?", a: "RJ-45", options: ["BNC", "RJ-69", "RJ-45", "STP"] },
      { q: "A type of twisted pair cable used to connect a computer to a network hub/router.", a: "Straight-through", options: ["Coaxial", "Straight-through", "Crossover", "Rollover"] },
      { q: "A type of Ethernet cable used to connect computing devices of the same type (e.g., two computers) directly.", a: "Crossover", options: ["A straight-through", "Coaxial", "Rollover", "Crossover"] },
      { q: "What type of cable is used to connect a terminal and a console port?", a: "Rollover", options: ["Coaxial", "Rollover", "Crossover", "Straight-through"] },
      { q: "How many pairs of wires make up a UTP cable?", a: "4", options: ["6", "4", "2", "8"] },
      { q: "Which of the following devices is a component of a PC that connects it to the networking device?", a: "NIC card", options: ["NIC card", "Repeater", "Hub", "Bridge", "Gateway"] },
      { q: "It is an intelligent network device that has decision-making and switching capabilities whose basic function is to expedite traffic flow on networks.", a: "Switch", options: ["Hub", "Repeater", "Router", "Switch", "Bridge"] },
      { q: "Which among the following network devices is capable of storing MAC address tables?", a: "Switch", options: ["Bridge", "Router", "Hub", "Switch", "Gateway"] },
      { q: "The MAC address is made up of ______ bytes or octets identified by its hexadecimal code.", a: "6", options: ["8", "6", "4", "16"] },
      { q: "Which among the following network devices is used to connect two or more different LANs?", a: "Router", options: ["Switch", "Hub", "Repeater", "Router", "Bridge"] },
      { q: "The MAC address is made up of how many bits?", a: "48", options: ["128", "48", "64", "32"] },
      { q: "Which device takes data from one network device and broadcasts the same to all the devices in the network?", a: "Hub", options: ["Hub", "Modem", "Router", "Switch", "Bridge"] },
      { q: "What does the twisting of the wires do in a twisted-pair cable?", a: "It reduces noise problems.", options: ["It makes it thinner.", "It makes it less expensive.", "It reduces noise problems.", "It allows six pairs to fit in the space of four pairs."] },
      { q: "For which of the following would you not need to provide a crossover cable?", a: "Connecting routers to switches", options: ["Connecting uplinks between switches", "Connecting routers to switches", "Connecting hubs to switches", "None of the above."] },
      { q: "Which among the following is NOT a function of a repeater?", a: "Repeater regenerates the signal over different networks", options: ["Repeater regenerates the signal over different networks", "Repeater does not amplify the signal", "It operates at the physical layer (layer 1)", "It is a 2-port device"] },
      { q: "How does a switch identifies a PC or node connected to the network?", a: "Through its MAC address", options: ["Through its MAC address", "Through its IP address", "Through its port address", "Through its logical address"] },
      { q: "What is the information that is 'burned in' to a network interface card?", a: "MAC address", options: ["NIC", "MAC address", "Hub", "LAN"] },
      { q: "For a given mesh network topology as shown, how many cables/links and ports are needed?(Diagram shows 4 PCs connected in a full mesh)", a: "6 cables, 12 ports", options: ["6 cables, 12 ports", "12 cables, 6 ports", "6 cables, 6 ports", "12 cables, 12 ports"] },
      { q: "Six PCs are connected to a local area network via a hub. PC0 would like to send data packet to PC3. What series of operations illustrates the working principle of a hub?", a: "A-D-E-G-F-B-C", options: ["A-D-E-G-F-B-C", "A-D-E-F-G-B-C", "A-B-C-D-E-F-G", "A-B-E-G-F-D-C"] },
      { q: "Six PCs are connected to a local area network via a SWITCH. PC0 would like to send data packet to PC4. What series of operations illustrates the working principle of a switch?", a: "A-C-D-F", options: ["A-C-D-F", "A-B-C-D-E-F", "A-D-C-F", "A-B-D-C-E-F"] },
      { q: "What portion of the IP address 129.219.51.18 represents the network?", a: "129.219", options: ["129.219", "129", "14.1", "1"] },
      { q: "As a network administrator, your client wants you to suggest either a switch or hub to be used in a medium-sized network. Which device will you recommend to such network?", a: "Switch", options: ["Switch", "Hub", "Either switch or hub", "Neither switch or hub"] }
    ],

    IP_ADDRESSING_SUBNET: [
      { q: "In a classful IPv4 address, the address 238.34.2.1 belongs to", a: "D", options: ["A", "C", "B", "D"] },
      { q: "What portion of the classful IP address 154.19.2.7 is the network address?", a: "154.19", options: ["154.19.2", "154.19", "154.19.2.7", "154"] },
      { q: "What are the two parts of an IPv4 address?", a: "Network address and host address", options: ["Network address and host address", "Network address and MAC address", "Host address and MAC address", "MAC address and subnet mask"] },
      { q: "The network number plays what part in an IP address?", a: "It specifies the network to which the host belongs", options: ["It specifies the network to which the host belongs", "It specifies which node on the subnetwork is being addressed.", "It specifies which networks the device can communicate with.", "It specifies the identity of the computer on the network."] },
      { q: "What portion of the IP address 129.219.51.18 represents the host id?", a: "51.18", options: ["18", "129.219.51", "129.219", "51.18"] },
      { q: "How many bits are in an IPv4 address?", a: "32", options: ["32", "128", "64", "48"] },
      { q: "The following is a valid IPv4 address EXCEPT__", a: "75.45.301.14", options: ["114.34.2.8", "132.56.8.6", "75.45.301.14", "208.34.54.12"] },
      { q: "What is the maximum value of each octet in an IP address?", a: "255", options: ["64", "256", "0", "255"] },
      { q: "How many host addresses can be used in a Class C network?", a: "254", options: ["255", "253", "256", "254"] },
      { q: "What is the /n notation for Class D address?", a: "none", options: ["none", "/8", "/24", "/16"] },
      { q: "Write the given mask 255.255.224.0 in slash notation(/n).", a: "/19", options: ["/8", "/24", "/19", "/16"] },
      { q: "Write the given mask 255.255.240.0 in slash notation(/n).", a: "/20", options: ["/16", "/20", "/18", "/19"] },
      { q: "In how many octets is IPv6 address segregated or grouped into?", a: "16", options: ["32", "16", "6", "4"] },
      { q: "How many hexadecimal digits are in an IPv6 address?", a: "32", options: ["8", "32", "16", "64"] },
      { q: "IPv6 address contains 8 sections separated by a colon. How many bytes are there in each section?", a: "2", options: ["16", "4", "2", "8"] },
      { q: "Write the shortest form of the given IPv6 address: 0000:00BC:0000:0000:0000:0000:119A:C250", a: "0:BC::119A:C250", options: ["0:00BC:0: 0: 0: 0:119A:C250", "0:BC::119A:C250", "0:00BC::119A:C250", "0:BC::119A:C25"] },
      { q: "Write the shortest form of the given IPv6 address: 234A:0000:0000:0000:00BB:119A:A001:0000", a: "234A::BB:119A:A001:0", options: ["234A:0:0:0:BB:119A:A001:0", "234A::00BB:119A:A001:0", "234A:0:0:0:00BB:119A:A001:0", "234A::BB:119A:A001:0"] },
      { q: "Which among the following is not a valid IPv6 address?", a: "0:BC::119A:C25", options: ["234A:0:0:0:00BB:119A:A001:0", "0:00BC::119A:C250", "0:BC::119A:C25", "234A:0:0:0:BB:119A:A001:0"] },
      { q: "In a block of addresses, the IP address of one host is known to be 182.44.82.16/26. Find the number of addresses in this block.", a: "64", options: ["64", "32", "16", "256"] },
      { q: "In a block of addresses, the IP address of one host is known to be 25.34.12.56/16. Find the number of addresses in this block.", a: "65536", options: ["16", "65536", "16777216", "256"] },
      { q: "In a block of addresses, the IP address of one host is known to be 182.44.82.16/26. What is the first address (network address) in this block?", a: "182.44.82.0", options: ["182.44.82.01", "182.44.82.0", "182.44.82.63", "182.44.0.0"] },
      { q: "In a block of addresses, the IP address of one host is known to be 25.34.12.56/16. What is the first address (network address) in this block?", a: "25.34.0.0", options: ["25.34.255.255", "25.34.0.1", "25.34.0.0", "25.34.255.0"] },
      { q: "In a block of addresses, the IP address of one host is known to be 25.34.12.56/16. What is the last address (limited broadcast address) in this block?", a: "25.34.255.255", options: ["25.34.255.255", "25.34.0.255", "25.34.255.0", "25.255.255.255"] },
      { q: "In a block of addresses, the IP address of one host is known to be 182.44.82.16/26. What is the last address (limited broadcast address) in this block?", a: "182.44.82.63", options: ["182.44.255.255", "182.44.82.64", "182.44.82.255", "182.44.82.63"] },
      { q: "Find the new mask for subnet 4 (4 addresses) from the block 17.12.40.0/27.", a: "/30", options: ["/29", "/28", "/27", "/30"] },
      { q: "Find the new mask for subnet 2 (8 addresses) from the block 17.12.40.0/27.", a: "/29", options: ["/30", "/28", "/27", "/29"] },
      { q: "Find the new mask for subnet 1 (16 addresses) from the block 17.12.40.0/27.", a: "/28", options: ["/29", "/30", "/28", "/27"] },
      { q: "The RIR is an organization that manages the allocation and registration of Internet number resources... RIR stands for:", a: "Regional Internet Registries", options: ["Regional Internal Registries", "Registries Internet Regional", "Regional Internet Registries", "Registries Internal Regional"] },
      { q: "The IP address space is managed globally by the IANA... IANA stands for:", a: "Internet Assigned Numbers Authority", options: ["Internet Assigned Numbers Authority", "Internal Assigned Numbers Authority", "Internet Associative Numbers Authoritative", "Internal Associative Numbers Authority"] }
    ],


    // EXERCISE_OSI_TCP_IP: kept as an exercises pool but duplicates removed if already present in OSI_DATA_COMMS/IP_ADDRESSING_SUBNET
    // Only unique exercise questions that were not exact duplicates are kept here.
    EXERCISE_OSI_TCP_IP: [
      { q: "How many layers are there in the OSI model?", a: "7", options: ["4", "7", "6", "5"] },
      { q: "Identify the OSI layer that defines frames.", a: "Data link layer", options: ["Physical layer", "Data link layer", "Network layer", "Transport layer"] },
      { q: "Identify the OSI layer that performs transmission of bit stream across physical medium.", a: "Physical layer", options: ["Physical layer", "Data link layer", "Network layer", "Transport layer"] },
      { q: "Identify the OSI layer that performs process-to-process message delivery.", a: "Transport layer", options: ["Application layer", "Physical layer", "Data link layer", "Network layer", "Transport layer"] },
      { q: "Identify the OSI layer that establishes, manages and terminates sessions.", a: "Session layer", options: ["Transport layer", "Session layer", "Presentation layer", "Application layer"] },
      { q: "Identify the OSI layer that provides log-in and log-out procedures.", a: "Session layer", options: ["Transport layer", "Session layer", "Presentation layer", "Application layer"] },
      { q: "Identify the OSI layer that provides independence from different data representation", a: "Presentation layer", options: ["Transport layer", "Session layer", "Presentation layer", "Application layer"] },
      { q: "Identify the OSI layer that formats and codes conversion services.", a: "Presentation layer", options: ["Transport layer", "Session layer", "Presentation layer", "Application layer"] },
      { q: "Identify the OSI layer that provides access for the end user.", a: "Application layer", options: ["Network layer", "Data link layer", "Transport layer", "Application layer"] },
      { q: "Identify the OSI layer that communicates directly with user's application program.", a: "Application layer", options: ["Transport layer", "Session layer", "Presentation layer", "Application layer"] },
      { q: "A packet in TCP (Transmission Control Protocol) is called", a: "Segment", options: ["Segment", "Bits", "Frames", "Datagrams"] },
      { q: "The unit of data transfer between two devices using TCP software is called a", a: "Segment", options: ["Frames", "Packet", "Datagram", "Segment"] },
      { q: "A transportation unit in an SCTP protocol is termed as", a: "Packet", options: ["Datagram", "Frames", "Packet", "Segment"] },
      { q: "Process-to-process delivery at the transport layer needs two identifiers, IP address and the port number, at each end to make connection. The combination of an IP address and a port number is called a", a: "Socket address", options: ["Port address", "Logical address", "Physical address", "Socket address"] },
      { q: "Which protocol does not belong to the Transport layer?", a: "FTP", options: ["UDP", "SCTP", "FTP", "TCP"] },
      { q: "Which protocol does not belong to the Network layer?", a: "SMTP", options: ["RARP", "ARP", "ICMP", "SMTP", "IGMP"] },
      { q: "Which protocol does not belong to the Application layer?", a: "ARP", options: ["SMTP", "ARP", "DNS", "FTP", "SNMP"] },
      { q: "A network layer protocol that sends query and error reporting messages. It is a mechanism used by hosts and gateways to send notification of datagram problems back to the sender.", a: "ICMP (Internet Control Message Protocol)", options: ["RARP (Reverse Address Resolution Protocol)", "ARP (Address Resolution Protocol)", "IGMP (Internet Group Message Protocol)", "ICMP (Internet Control Message Protocol)", "IPv4 (Internet Protocol version 4)"] },
      { q: "A network layer protocol that allows a host to discover its internet address when it knows only its physical address. It is used when a computer is connected to a network for the first time or when a diskless computer is booted.", a: "RARP (Reverse Address Resolution Protocol)", options: ["IGMP (Internet Group Message Protocol)", "RARP (Reverse Address Resolution Protocol)", "ARP (Address Resolution Protocol)", "ICMP (Internet Control Message Protocol)", "IPv4 (Internet Protocol version 4)"] },
      { q: "On a typical physical network such as LAN, each device on a link is identified by a physical or station address, usually imprinted on the network interface card (NIC). What network layer protocol is used to find the physical address of the node when its IP address is known?", a: "ARP (Address Resolution Protocol)", options: ["ICMP (Internet Control Message Protocol)", "RARP (Reverse Address Resolution Protocol)", "IGMP (Internet Group Message Protocol)", "IPv4 (Internet Protocol version 4)", "ARP (Address Resolution Protocol)"] },
      { q: "A network layer protocol that is used to facilitate the simultaneous transmission of a message to a group of recipients. It is a management protocol that helps a multicast router create and update a list of loyal members related to each router interface.", a: "IGMP (Internet Group Message Protocol)", options: ["IPv4 (Internet Protocol version 4)", "ICMP (Internet Control Message Protocol)", "RARP (Reverse Address Resolution Protocol)", "IGMP (Internet Group Message Protocol)", "ARP (Address Resolution Protocol)"] },
      { q: ": A client/server, static configuration protocol in the application layer designed to provide physical address to logical address mapping.", a: "BOOTP (Bootstrap Protocol)", options: ["DHCP (Dynamic Host Configuration Protocol)", "SNMP (Simple Network Management Protocol", "IGMP (Internet Group Message Protocol)", "BOOTP (Bootstrap Protocol)", "SCTP (Stream Control Transmission Protocol)"] },
      { q: "A protocol that provides static and dynamic address location that can be manual or automatic.", a: "DHCP (Dynamic Host Configuration Protocol)", options: ["DHCP (Dynamic Host Configuration Protocol)", "IGMP (Internet Group Message Protocol)", "SCTP (Stream Control Transmission Protocol)", "BOOTP (Bootstrap Protocol)", "SNMP (Simple Network Management Protocol"] },
      { q: "It is a framework for managing devices in an internet using the TCP/IP protocol suite. It provides a set of fundamental operations for monitoring and maintaining an internet.", a: "SNMP (Simple Network Management Protocol)", options: ["SNMP (Simple Network Management Protocol)", "DNS (Domain Name System)", "TELNET (Terminal Network)", "FTP (File Transfer Protocol)", "SMTP (Simple Mail Transfer Protocol)"] },
      { q: "The Internet Assigned Number Authority (IANA) has divided the port numbers into three ranges: (1) the ports ranging from 0 to 1023 are assigned and controlled by IANA and are called the well-known ports; (2) the ports ranging from 1024 to 49,151 are not assigned or controlled by IANA although they can be registered with IANA to prevent duplication. These are known as registered ports; and (3) the ports ranging from 49,152 to 65, 535 are neither controlled nor registered. They can be used by any process. These are known as the dynamic or ephemeral ports. HTTP uses the services of TCP on well-known", a: "port 80", options: ["port 20", "port 80", "port 53", "port 21"] },
      { q: "FTP uses two well-known TCP ports: _____ for control connection and _____ for data connection.", a: "port 21, port 20", options: ["port 21, port 20", "port 21, port 80", "port 20, port 53", "port 20, port 21"] },
      { q: "DNS can use the services of UDP or TCP using the well-known", a: "port 53", options: ["port 53", "port 80", "port 20", "port 21"] },
      { q: "It is the leading information retrieval service of the Internet (the worldwide computer network). It is a repository of information linked together from points all over the world. It was a project initiated by CERN (European Laboratory for Particle Physics) to create a system to handle distributed resources necessary for scientific research.", a: "WWW (World Wide Web)", options: ["IPv6", "WAN (Wide Area Network)", "WWW (World Wide Web)", "URL (Uniform Resource Locator)"] },
      { q: "It is a standard for specifying any kind of information on the internet. It defines the protocol, host computer, port and path. It is a unique identifier used to locate a resource on the Internet and commonly referred to also as a web address.", a: "URL (Uniform Resource Locator)", options: ["URL (Uniform Resource Locator)", "IP Address", "MAC Address", "WWW (World Wide Web)"] },
      { q: "A client/server application that provides name services for other applications. It enables the use of application-layer addresses, such as an email address, instead of network layer logical addresses. It is a protocol that can be used in different platforms.", a: "DNS (Domain Name System)", options: ["TELNET (Terminal Network", "SNMP (Simple Network Management Protocol)", "SMTP (Simple Mail Transfer Protocol)", "FTP (File Transfer Protocol)", "DNS (Domain Name System)"] },
      { q: "It is a language for creating web pages. It allows the use only of ASCII characters both for the main text and the formatting instructions. In this way, every computer can receive the whole document as an ASCII document. The main text is the data and the formatting instructions can be used by the browser to format the data.", a: "Hypertext Markup Language (HTML)", options: ["Java Server Pages (JSP)", "Hypertext Markup Language (HTML)", "Hypertext Preprocessor (PHP)", "Active Server Pages (ASP)"] },
      { q: "The following are technologies used for creating dynamic documents (or server-site dynamic documents) using scripts EXCEPT:", a: "Hypertext Markup Language (HTML)", options: ["Hypertext Markup Language (HTML)", "Java Server Pages (JSP) which uses the Java language", "Hypertext Preprocessor (PHP) which uses the Perl language", "Active Server Pages (ASP) which uses Visual Basic"] },
      { q: "It is a protocol used mainly to access data on the World Wide Web. It functions as a combination of FTP and SMTP.", a: "HTTP (Hypertext Transfer Protocol)", options: ["HTML (Hypertext Markup Language)", "TELNET (Terminal Network)", "DNS (Domain Name System)", "HTTP (Hypertext Transfer Protocol)", "SNMP (Simple Network Management Protocol)"] },
      { q: "It is the formal application layer protocol that defines the message transfer agent (MTA) client and server in the Internet. It defines how commands and responses must be sent back and forth.", a: "SMTP (Simple Mail Transfer Protocol)", options: ["TELNET (Terminal Network", "FTP (File Transfer Protocol)", "DNS (Domain Name System)", "SMTP (Simple Mail Transfer Protocol)", "SNMP (Simple Network Management Protocol)"] },
      { q: "It is the standard mechanism provided by TCP/IP for copying a file from one host to another. It differs from other client/server applications in that it establishes two connections between the hosts. One connection is used for data transfer, the other for control information (commands and responses).", a: "FTP (File Transfer Protocol)", options: ["TELNET (Terminal Network)", "DNS (Domain Name System)", "SNMP (Simple Network Management Protocol)", "SMTP (Simple Mail Transfer Protocol)", "FTP (File Transfer Protocol)"] },
      { q: "It is the standard TCP/IP protocol for virtual terminal service as proposed by the International Organization for Standards (ISO). It is a general-purpose client/server application program that enables the establishment of a connection to a remote system in such a way that the local terminal appears to be a terminal at the remote system. It allows the user to log on to a remote machine, giving the user access to the remote system.", a: "TELNET (Terminal Network)", options: ["SMTP (Simple Mail Transfer Protocol", "TELNET (Terminal Network)", "FTP (File Transfer Protocol)", "SNMP (Simple Network Management Protocol)", "DNS (Domain Name System)"] }
    ],

    LAW_RA10844: [
      { q: "When was RA No. 10844 signed into law?", a: "May 23, 2016", options: ["May 23, 2015", "October 9, 2015", "May 23, 2016", "March 26, 2015"] },
      { q: "What important role of ICT is stated in the Declaration of Policy of RA 10844?", a: "Information and Communication in nation-building", options: ["Information and Communication in nation-building", "Digital Infrastructure", "Automation and Robotics", "Development of Networks"] },
      { q: "In what areas should ICT be available and accessible according to RA 10844?", a: "Areas not adequately served by the private sector", options: ["Industrial Zones", "Private sectors", "Areas not adequately served by the private sector", "Urban cities"] },
      { q: "What should ICT infrastructures be according to RA 10844?", a: "Strategic, reliable, cost-efficient, and citizen-centric", options: ["Built only for telecom companies", "Strategic, reliable, cost-efficient, and citizen-centric", "Focused mainly on big industrial zones", "Expensive and limited"] },
      { q: "Who leads the DICT, and what offices make up the Department proper?", a: "Secretary, Undersecretaries, Assistant Secretaries", options: ["Commissioner and ICT Board", "Local Government ICT Officers", "ICT Councils and Committees", "Secretary, Undersecretaries, Assistant Secretaries"] },
      { q: "Which agency was attached to the DICT but kept its regulatory powers?", a: "National Telecommunications Commission (NTC)", options: ["National Computer Center (NCC)", "National Telecommunications Commission (NTC)", "Cybercrime Investigation and Coordination Center (CICC)", "Telecommunications Office"] },
      { q: "Which office was transferred from DOST to the DICT?", a: "ICT Office (ICTO)", options: ["PAGASA", "ICT Office (ICTO)", "National Irrigation Authority", "Energy Development Office"] },
      { q: "Which of the following is one of the main functions of the DICT?", a: "Promote access to ICT and create ICT policies", options: ["Manage maritime systems", "Promote access to ICT and create ICT policies", "Regulate agricultural cooperatives", "Operate national power plants"] },
      { q: "How many Undersecretaries are allowed under the DICT structure?", a: "Three", options: ["One", "Two", "Three", "Four"] },
      { q: "What is DICT's role in cybersecurity under RA 10844?", a: "Implement and coordinate cybersecurity policies", options: ["Arrest cybercriminals", "Implement and coordinate cybersecurity policies", "Ban private encryption", "Give cybersecurity services only to private firms"] }
    ],

    LAW_RA11363: [
      { q: "What government body was created by RA 11363?", a: "Philippine Space Agency (PhilSA)", options: ["Philippine Space Council", "Department of Space Science", "Philippine Space Agency (PhilSA)", "National Research Council"] },
      { q: "What does \"PhilSA\" stand for?", a: "Philippine Space Agency", options: ["Philippine Satellite Authority", "Philippine Space Administration", "Philippine Space Agency", "Philippine Science Agency"] },
      { q: "Which year was the Philippine Space Act approved?", a: "2019", options: ["2017", "2018", "2019", "2020"] },
      { q: "Who is the Chairperson of the Philippine Space Council?", a: "President of the Philippines", options: ["Secretary of Science and Technology", "Secretary of National Defense", "Director General of PhilSA", "President of the Philippines"] },
      { q: "PhilSA is attached to which office for policy coordination?", a: "Office of the President", options: ["Department of Science and Technology", "Office of the President", "Department of National Defense", "Senate of the Philippines"] },
      { q: "What is the main role of PhilSA?", a: "Plan and promote the national space program", options: ["Regulate airline operations", "Plan and promote the national space program", "Conduct military intelligence missions", "Supervise telecommunications companies"] },
      { q: "Which government office confirms the appointment of the PhilSA Director General?", a: "Commission on Appointments", options: ["Supreme Court", "Department of Budget and Management", "Senate Committee on Science and Technology", "Commission on Appointments"] },
      { q: "How long after publication does the Act take effect?", a: "Fifteen (15) days", options: ["Immediately", "Ten (10) days", "Fifteen (15) days", "Thirty (30) days"] },
      { q: "How much was the initial operating fund of the PhilSA?", a: "P1 billion", options: ["P500 million", "P1 billion", "P2 billion", "P10 billion"] },
      { q: "The Philippine Space Development Fund is administered by whom?", a: "Director General of PhilSA", options: ["Secretary of Finance", "Philippine Space Council", "Director General of PhilSA", "Department of Budget and Management"] }
    ],

    LAW_RA11934: [
      { q: "What is the official short title of Republic Act No. 11934?", a: "Subscriber Identity Module (SIM) Registration Act", options: ["SIM Card Law", "Subscriber Identity Module (SIM) Registration Act", "Mobile Phone Registration Act", "Telecommunications Security Act"] },
      { q: "Who signed Republic Act No. 11934 into law, and on what date?", a: "Pres. Ferdinand Marcos Jr. on October 10, 2022", options: ["Pres. Rodrigo Duterte on April 14, 2022", "Pres. Ferdinand Marcos Jr. on October 10, 2022", "Pres. Ferdinand Marcos Jr. on December 27, 2022", "Pres. Rodrigo Duterte on September 19, 2022"] },
      { q: "According to Section 4 of RA 11934, how many days from the effectivity of the Act were existing SIM subscribers required to register their SIMs?", a: "180 days, extendable by 120 days", options: ["90 days, extendable by 60 days", "120 days, extendable by 90 days", "180 days, extendable by 120 days", "365 days, non-extendable"] },
      { q: "Which of the following information is NOT required for individual SIM registration under Section 5?", a: "Educational background", options: ["Full name", "Date of birth", "Educational background", "Address"] },
      { q: "How long must PTEs retain SIM registration data after an end-user deactivates their mobile number?", a: "10 years", options: ["3 years", "5 years", "10 years", "Indefinitely"] },
      { q: "For tourist SIM cards registered by foreign nationals visiting the Philippines, what is the validity period before automatic deactivation?", a: "30 days", options: ["15 days", "30 days", "60 days", "90 days"] },
      { q: "What is the penalty for 'spoofing' a registered SIM under Section 11(e)?", a: "Imprisonment of no less than 6 years or fine of P200,000, or both", options: ["Imprisonment of 6 months to 2 years or fine of P100,000 to P300,000", "Imprisonment of no less than 6 years or fine of P200,000, or both", "Fine of P500,000 to P4,000,000", "Imprisonment of 6 months to 6 years or fine of P100,000 to P300,000"] },
      { q: "Under what circumstances can PTEs disclose subscriber information according to Section 9?", a: "With written consent of the subscriber or in compliance with a court order upon finding of probable cause", options: ["Upon request from any government agency", "With written consent of the subscriber or in compliance with a court order upon finding of probable cause", "Whenever the PTE deems it necessary for security purposes", "Upon request from telecommunications companies"] },
      { q: "How should minors register their SIM cards according to Section 5(d)?", a: "Registration must be under the name of the minor's parent or guardian with their consent", options: ["Minors cannot register SIM cards under any circumstances", "Minors can register directly using their birth certificate", "Registration must be under the name of the minor's parent or guardian with their consent", "Minors can register using their school ID only"] },
      { q: "What is the maximum penalty for breach of confidentiality under Section 11(b)?", a: "Fine of P4,000,000", options: ["Fine of P1,000,000", "Fine of P2,000,000", "Fine of P4,000,000", "Imprisonment of 6 years and fine of P500,000"] }
    ],

    LAW_RA3846: [
      { q: "What is required before a person may legally operate any radio transmitting equipment in the Philippines?", a: "A radio operator certificate and station license", options: ["A barangay permit", "A radio operator certificate and station license", "A certificate of calibration only", "A municipal communication clearance"] },
      { q: "Which of the following is allowed under RA 3846 without requiring a station license?", a: "Operating a household radio receiver", options: ["Operating a household radio receiver", "Broadcasting over a homemade radio transmitter", "Transmitting Morse code as a hobby", "Constructing a commercial radio relay system"] },
      { q: "Under RA 3846, when can the government take temporary control of radio communications?", a: "During periods of war, emergency, or crisis", options: ["When a new president is elected", "During periods of war, emergency, or crisis", "When radio ratings decline", "Whenever new frequencies are assigned"] },
      { q: "Which of the following is prohibited under RA 3846 unless proper authorization is granted?", a: "Possession of any radio transmitter", options: ["Listening to FM radio music", "Possession of any radio transmitter", "Owning a battery-powered receiver", "Selling headphones for radio sets"] },
      { q: "What is the maximum validity period of a radio station license under RA 3846?", a: "3 years", options: ["1 year", "2 years", "3 years", "5 years"] },
      { q: "Which of the following is NOT one of the powers of the Secretary of Commerce and Communications under RA 3846?", a: "Grant citizenship to applicants", options: ["Assign radio frequencies", "Classify radio stations", "Issue operator licenses", "Grant citizenship to applicants"] },
      { q: "Under RA 3846, licenses cannot be transferred to a firm whose capital stock is _ % owned or controlled by aliens.", a: "20%", options: ["5%", "10%", "20%", "50%"] },
      { q: "In what situations may the President or Governor-General cause the closing of radio stations?", a: "During war, public peril, calamity, or disaster", options: ["Only during wartime", "During war, public peril, calamity, or disaster", "Whenever the government deems necessary", "During election periods only"] },
      { q: "What constitutes each day of continuous violation?", a: "A separate offense subject to penalties", options: ["A warning period", "A grace period", "A separate offense subject to penalties", "A minor infraction"] },
      { q: "Under Section 7, who are authorized to intercept radio messages?", a: "Persons authorized by the Secretary of Commerce and Communication", options: ["Any law enforcement officer", "Only the Secretary of Commerce and Communication", "Persons authorized by the Secretary of Commerce and Communication", "Anyone with proper radio equipment"] }
    ],

    LAW_RA7925: [
      { q: "RA 7925 is primarily known as which of the following laws in the Philippines?", a: "Public Telecommunications Policy Act", options: ["Electronic Commerce Act", "Public Telecommunications Policy Act", "Cybercrime Prevention Act", "Data Privacy Act"] },
      { q: "In what year was RA 7925 enacted to reform the Philippine telecommunications sector?", a: "1995", options: ["1986", "1990", "1995", "2001"] },
      { q: "One of the main objectives of RA 7925 was to transform the telecommunications market from a monopoly into which type of environment?", a: "Open and competitive market", options: ["Nationalized system", "Open and competitive market", "Government-only service", "Non-profit cooperative system"] },
      { q: "RA 7925 sought to encourage which of the following to help modernize the telecommunications industry?", a: "Private sector investment and innovation", options: ["Sole government ownership", "Private sector investment and innovation", "Foreign military support", "Elimination of all private companies"] },
      { q: "Under RA 7925, which government body is primarily tasked with regulating the telecommunications sector and enforcing the law's provisions?", a: "National Telecommunications Commission (NTC)", options: ["National Telecommunications Commission (NTC)", "National Privacy Commission (NPC)", "Department of Science and Technology (DOST)", "National Economic and Development Authority (NEDA)"] },
      { q: "A key policy under RA 7925 is to promote 'universal access.' What does this mainly refer to in the context of telecommunications?", a: "Wider availability of basic telecommunications services nationwide", options: ["Free devices for all citizens", "Priority service for urban centers only", "Limiting service to licensed engineers", "Wider availability of basic telecommunications services nationwide"] },
      { q: "RA 7925 aims to protect subscribers primarily through which of the following regulatory goals?", a: "Enforcing service quality and fair rates", options: ["Ensuring only one dominant provider", "Enforcing service quality and fair rates", "Preventing foreign investment", "Enforcing service quality and fair rates"] },
      { q: "To foster competition, RA 7925 encourages which practice among service providers?", a: "Interconnection among networks", options: ["Exclusive franchises without oversight", "Anti-competitive pricing agreements", "Interconnection among networks", "Blocking rival networks' calls"] },
      { q: "The policy direction of RA 7925 regarding technology can best be described as which of the following?", a: "Promoting modernization and technological innovation", options: ["Promoting modernization and technological innovation", "Restricting the use of modern technologies", "Maintaining only analog systems", "Banning foreign-made equipment"] },
      { q: "For ECE professionals, RA 7925 is important because it:", a: "Defines the legal and regulatory environment for telecom systems they design and maintain", options: ["Replaces engineering licensure requirements", "Defines the legal and regulatory environment for telecom systems they design and maintain", "Eliminates the need for compliance with technical standards", "Limits engineers to government employment only"] }
    ],

    LAW_RA12234: [
      { q: "What is the primary objective of Republic Act 12234 (Konektadong Pinoy Act)?", a: "To expand nationwide access to affordable and reliable internet service", options: ["To privatize telecommunications companies", "To expand nationwide access to affordable and reliable internet service", "To restrict foreign investment in ICT", "To regulate radio broadcast frequencies"] },
      { q: "Under the Konektadong Pinoy Act, which sector is mandated to lead the expansion of internet connectivity in underserved areas?", a: "DICT", options: ["DOST", "DICT", "NTC", "DepEd"] },
      { q: "RA 12234 prioritizes which areas for immediate digital infrastructure development?", a: "Geographically isolated and disadvantaged areas (GIDAS)", options: ["Business districts and financial zones", "Tourist destinations", "Geographically isolated and disadvantaged areas (GIDAS)", "Entertainment and gaming zones"] },
      { q: "What does 'DTIP' mean?", a: "Data Transmission Industry Participant", options: ["Data Transmission Industry Participant", "Digital Telephone Internet Provider", "Department of Technology and Internet Policy", "Direct Television Internet Package"] },
      { q: "The Konektadong Pinoy Act directs the government to establish digital infrastructure using which of the following technologies?", a: "A mix of fiber-optic, wireless, and satellite technologies", options: ["Only fiber-optic networks", "Only copper wire networks", "A mix of fiber-optic, wireless, and satellite technologies", "Radio-only access networks"] },
      { q: "Which government agency regulates telecommunications entities that will participate in the Konektadong Pinoy programs?", a: "National Telecommunication Commission (NTC)", options: ["Department of Energy", "National Telecommunication Commission (NTC)", "Department of Agriculture", "National Economic Development Authority"] },
      { q: "RA 12234 requires the government to promote digital inclusion. What does digital inclusion primarily refer to?", a: "Ensuring all Filipinos have access to internet and digital literacy", options: ["Limiting the number of internet users", "Ensuring all Filipinos have access to internet and digital literacy", "Requiring schools to teach only computer coding", "Restricting ICT jobs to licensed engineers"] },
      { q: "Under the Act, DICT is authorized to collaborate with which sectors to improve nationwide connectivity?", a: "Government agencies, private sector, and international partners", options: ["Only local government units", "Only private telcos", "Government agencies, private sector, and international partners", "Agricultural cooperatives only"] },
      { q: "Which policy means that when roads or big projects are built, they should put conduits underground at the same time so DITPs and other relevant entities can later put cables inside without digging the road again?", a: "Dig Once Policy", options: ["Open Access Policy", "Cable Management Policy Framework", "Dig Once Policy", "Pre-installation Cooperation Policy"] },
      { q: "What is emphasized in RA 12234 regarding internet access in public areas?", a: "Public areas should have free, reliable, and secure internet access", options: ["All public Wi-Fi must be paid", "Public Wi-Fi should be removed to reduce data privacy risks", "Public areas should have free, reliable, and secure internet access", "Only LGUs are allowed to provide public Wi-Fi"] }
    ],

    LAW_RA9292: [
      { q: "What is the primary purpose of RA 9292?", a: "To modernize the practice of electronics engineering and protect the profession", options: ["To regulate telecommunication companies", "To modernize the practice of electronics engineering and protect the profession", "To create the DICT", "To regulate importation of electronic devices"] },
      { q: "Who composes the Professional Regulatory Board of Electronics Engineering?", a: "1 chairman and 2 members", options: ["1 chairman and 4 members", "1 chairman and 3 members", "1 chairman and 2 members", "2 chairmen and 3 members"] },
      { q: "The Board of ECE is under which government agency?", a: "PRC", options: ["NTC", "DICT", "PRC", "DOST"] },
      { q: "Which of the following is NOT a category of professionals under RA 9292?", a: "Master Electrician (ME)", options: ["Electronics Engineer (ECE)", "Master Electrician (ME)", "Electronics Technician (ECT)", "Professional Electronics Engineer (PECE)"] },
      { q: "Who is authorized to sign and seal Electronics Engineering designs and plans?", a: "Professional Electronics Engineer", options: ["Any engineering graduate", "Electronics Technician", "Electronics Engineer", "Professional Electronics Engineer"] },
      { q: "Which of the following requires a PECE, not just an ECE?", a: "Preparing and signing electronics engineering documents", options: ["Repairing radio equipment", "Preparing and signing electronics engineering documents", "Installing basic CCTV systems", "Conducting electronics training"] },
      { q: "What is the minimum required experience (in years) before an ECE can apply for PECE?", a: "7 years", options: ["1 year", "2 years", "4 years", "7 years"] },
      { q: "Which of the following is within the scope of practice of Electronics Engineers?", a: "Designing analog and digital electronic circuits", options: ["Operating heavy electrical machinery", "Designing analog and digital electronic circuits", "Civil construction inspection", "Drafting architectural plans"] },
      { q: "Who is allowed to operate and maintain electronics equipment under RA 9292?", a: "Both ECE and ECT", options: ["Electronics Technician", "Electronics Engineer", "Both ECE and ECT", "Any trained worker"] },
      { q: "What is the penalty for practicing ECE or ECT without a valid license?", a: "Fine + imprisonment", options: ["6 months imprisonment only", "Fine only", "Fine + imprisonment", "Community service"] },
      { q: "Which agency grants the Certificate of Registration after passing the licensure exam?", a: "PRC", options: ["NTC", "PRC", "DICT", "DOST"] },
      { q: "What document legally authorizes a person to practice ECE or ECT?", a: "Certificate of Registration & PRC ID", options: ["Diploma", "Certificate of Good Moral Character", "Certificate of Training", "Certificate of Registration & PRC ID"] },
      { q: "Which of the following is a prohibited act under RA 9292?", a: "Using the ECE title without passing the board", options: ["Teaching electronics engineering subjects", "Using the ECE title without passing the board", "Designing communication systems", "Repairing computers"] },
      { q: "Which of the following is TRUE about Electronics Technicians (ECT)?", a: "They assist engineers in technical operations", options: ["They can sign engineering designs", "They assist engineers in technical operations", "They must hold a master’s degree", "They can perform PECE functions"] },
      { q: "What is the validity period of the PRC ID for ECE and ECT?", a: "3 years", options: ["1 year", "2 years", "3 years", "5 years"] },
      { q: "Which body prepares and administers the ECE and ECT licensure examinations?", a: "PRC Board of ECE", options: ["CHED", "DICT", "PRC Board of ECE", "NTC"] },
      { q: "What is required for renewal of PRC ID under RA 9292?", a: "CPE/CPD compliance", options: ["Only payment of fee", "CPE/CPD compliance", "Retaking an exam", "Passing a review course"] },
      { q: "Under RA 9292, who can practice the full scope of Electronics Engineering including sealing documents?", a: "PECE", options: ["ECE", "ECT", "PECE", "Any licensed engineer"] },
      { q: "What is one power of the Board of ECE?", a: "Suspend or revoke licenses", options: ["Regulate telcos", "Issue Certificates of Good Conduct", "Suspend or revoke licenses", "Draft curriculum for CHED"] },
      { q: "RA 9292 repealed which older law?", a: "RA 5734", options: ["RA 10844", "RA 8292", "RA 5734", "RA 7925"] }
    ],

    RF_ANTENNAS_WAVES: [
      {
        q: "100 µV is equivalent to",
        a: "-40 dBμV",
        options: ["-40 dBμV", "-20 dBμV", "-20 dBmV", "-40 dBmV"]
      },
      {
        q: "0 dBmW is equivalent to",
        a: "1 mW",
        options: ["10 mW", "0 Watt", "100 mW", "1 mW"]
      },
      {
        q: "30 dBW is equivalent to",
        a: "1000 W",
        options: ["100 W", "1000 W", "1000", "30 W"]
      },
      {
        q: "In dBuV, 1 milliVolt is equivalent to",
        a: "60",
        options: ["60", "-60", "30", "-30"]
      },
      {
        q: "1 nanoWatt of power is equivalent to",
        a: "-90 dBW",
        options: ["-180 dBW", "-90 dBW", "90 dBW", "-90 dBmW"]
      },
      {
        q: "Three cascaded amplifiers have power gains of 5 dB, 10 dB and 15 dB. If the input power is 100 mW, what is the output power?",
        a: "100 watts",
        options: ["10 watts", "100 watts", "100 kW", "100 mW"]
      },
      {
        q: "A circuit consists of two amplifiers with gains of 5 dB and 10 dB and two filters with attenuations -8 dB and-12 dB. If the output voltage is 1 volt, what is the input voltage?",
        a: "1.78 volt",
        options: ["1 volt", "1.78 volt", "0.56 mV", "0.56 volts"]
      },
      {
        q: "A shorted half-wave line and an open quarter-wave circuit at the operating frequency act like a(n)",
        a: "Series resonant circuit",
        options: ["Capacitor", "Inductor", "Series resonant circuit", "Parallel resonant circuit"]
      },
      {
        q: "A shorted quarter-wave and an open half-wave line at the operating frequency act like a(n)",
        a: "Parallel resonant circuit",
        options: ["Parallel resonant circuit", "Series resonant circuit", "Capacitor", "Inductor"]
      },
      {
        q: "The standing wave pattern of a given transmission line is such that half a wavelength away from the load the voltage is zero while the current is maximum. The line is terminated in",
        a: "a short circuit",
        options: ["a mismatched impedance", "a matched impedance", "a short circuit", "an open circuit"]
      },
      {
        q: "The standing wave pattern of a given transmission line is such that half a wavelength away from the load the voltage is maximum while the current is minimum. The line is terminated in",
        a: "an open circuit",
        options: ["an open circuit", "a mismatched impedance", "a short circuit", "a matched impedance"]
      },
      {
        q: "The standing wave pattern of a given transmission line is such that there is no point on the transmission line where the voltage or current remains zero over the whole cycle. The line is most likely terminated in",
        a: "a mismatched impedance",
        options: ["an open circuit", "a mismatched impedance", "a short circuit", "a matched impedance"]
      },
      {
        q: "A pattern of voltage and current variations along a transmission line not terminated in its characteristic impedance is called",
        a: "Standing waves",
        options: ["A magnetic field", "Radio waves", "Standing waves", "An electric field"]
      },
      {
        q: "A ratio expressing the percentage of incident voltage reflected on a transmission line is known as the",
        a: "Reflection coefficient",
        options: ["Velocity factor", "Line efficiency", "Standing-wave ratio", "Reflection coefficient"]
      },
      {
        q: "The reflection coefficient is -1. This means that the transmission line is terminated in a load that is",
        a: "short-circuited",
        options: ["matched", "open-circuited", "short-circuited", "mismatched"]
      },
      {
        q: "The reflection coefficient is -1. This means that",
        a: "the reflected voltage is equal in magnitude but out of phase with the incident voltage",
        options: ["the reflected voltage is equal in magnitude but out of phase with the incident voltage", "the reflected voltage is out of phase with the incident voltage", "the reflected voltage is equal in magnitude and in phase with the incident voltage", "the reflected voltage is equal in magnitude with the incident voltage"]
      },
      {
        q: "The SWR is 1. This means that the transmission line is terminated in a load that is",
        a: "matched",
        options: ["matched", "open-circuited", "mismatched", "short-circuited"]
      },
      {
        q: "The reflection coefficient is 1. This means that",
        a: "the reflected voltage is equal in magnitude and in phase with the incident voltage",
        options: ["the reflected voltage is out of phase with the incident voltage", "the reflected voltage is equal in magnitude and in phase with the incident voltage", "the reflected voltage is equal in magnitude but out of phase with the incident voltage", "the reflected voltage is equal in magnitude with the incident voltage"]
      },
      {
        q: "The reflection coefficient is 0. This means that the transmission line is terminated in a load that is",
        a: "matched",
        options: ["short-circuited", "mismatched", "open-circuited", "matched"]
      },
      {
        q: "The most desirable reflection coefficient is",
        a: "0",
        options: ["infinity", "-1", "1", "0"]
      },
      {
        q: "The desirable SWR on a transmission line is",
        a: "1",
        options: ["100", "1", "-1", "infinity"]
      },
      {
        q: "Indicate the false statement. The SWR on a transmission line is infinity; the line is terminated in",
        a: "a complex impedance",
        options: ["a short circuit", "a pure reactance", "an open circuit", "a complex impedance"]
      },
      {
        q: "One of the most critical aspects of any antenna system is to ensure maximum power transfer from the transmitter to the antenna. An important part of this is the transmission line. What value of SWR will allow maximum power transfer to take place?",
        a: "1:1",
        options: ["3:1", "1:1", "2:1", "00"]
      },
      {
        q: "A 50 ohm coax is connected to a 73-ohm antenna. The SWR is",
        a: "1.46",
        options: ["2.92", "1.46", "0.685", "1"]
      },
      {
        q: "The minimum voltage along a transmission line is 260 V, while the maximum is 390 V. The SWR is",
        a: "1.5",
        options: ["0.67", "1.2", "1.5", "1.0"]
      },
      {
        q: "The minimum current along a transmission line is 150 A, while the maximum is 300 A. The SWR is",
        a: "2.0",
        options: ["2.0", "1.5", "0.5", "1.0"]
      },
      {
        q: "The characteristic impedance of a transmission line does not depend upon its",
        a: "Length",
        options: ["None of the choices", "Conductor spacing", "Conductor diameter", "Length"]
      },
      {
        q: "For maximum absorption of power at the antenna, the relationship between the characteristic impedance of the line Zo and the load impedance Z_L should be",
        a: "Zo = Z_L",
        options: ["Zo < Z_L", "Zo = Z_L", "Zo > Z_L", "Zo = 0"]
      },
      {
        q: "A parasitic element that is spaced by some distance between approximately one-tenth and two-tenths of a wavelength from the driven element.",
        a: "Director",
        options: ["Driven element", "Boom", "Director", "Reflector"]
      },
      {
        q: "A parasitic element that is approximately 5 percent shorter than the half-wave dipole driven element and is mounted in front of the driven element.",
        a: "Director",
        options: ["Reflector", "Driven element", "Director", "Boom"]
      },
      {
        q: "A parasitic element that is typically about 5 percent longer than the half-wave dipole-driven element is",
        a: "Reflector",
        options: ["Boom", "Director", "Driven element", "Reflector"]
      },
      {
        q: "A parasitic element that is spaced from the driven element by a distance of about 0.15 to 0.25λ is a",
        a: "Reflector",
        options: ["Driven element", "Director", "Boom", "Reflector"]
      },
      {
        q: "An antenna that transmits or receives equally well in all directions is said to be",
        a: "Omnidirectional",
        options: ["Quasidirectional", "Omnidirectional", "Unidirectional", "Bidirectional"]
      },
      {
        q: "Which antenna has a unidirectional radiation pattern and gain?",
        a: "Yagi",
        options: ["Dipole", "Collinear", "Yagi", "Ground plane"]
      },
      {
        q: "The horizontal radiation pattern of a dipole is a",
        a: "Figure eight",
        options: ["Narrow beam", "Circle", "Figure eight", "Clover leaf"]
      },
      {
        q: "The horizontal radius pattern of a vertical dipole is a",
        a: "Circle",
        options: ["Circle", "Clover leaf", "Narrow beam", "Figure eight"]
      },
      {
        q: "A directional antenna with two or more elements is known as a(n)",
        a: "Array",
        options: ["End-fire", "Collinear", "Ground plane", "Array"]
      },
      {
        q: "A popular half-wavelength antenna is the",
        a: "Folded dipole",
        options: ["Folded dipole", "Loop", "Dipole", "Ground plane"]
      },
      {
        q: "A type of filter or circulator that allows a single antenna to be shared by a transmitter and receiver.",
        a: "Diplexer",
        options: ["Balun", "Antenna tuner", "Diplexer", "Q-section or matching stub"]
      },
      {
        q: "The characteristics and performance of an antenna are the same whether the antenna is radiating or intercepting an electromagnetic signal. This is known as",
        a: "Antenna reciprocity",
        options: ["Antenna reciprocity", "Radiation resistance", "Directivity", "Polarization"]
      },
      {
        q: "It refers to the orientation of magnetic and electric fields with respect to the earth.",
        a: "Polarization",
        options: ["Beam width", "Directivity", "Radiation resistance", "Polarization"]
      },
      {
        q: "The measure of an antenna's directivity.",
        a: "Directivity",
        options: ["Polarization", "Beamwidth", "Directivity", "Radiation resistance"]
      },
      {
        q: "What is the beam width of an antenna that has a gain of 30 dB?",
        a: "6.42 degrees",
        options: ["6.42 degrees", "30 degrees", "3 degrees", "31.6 degrees"]
      },
      {
        q: "What is the gain of an antenna that has a beam width of 36 degrees?",
        a: "15 dB",
        options: ["15 dB", "36 dB", "10 dB", "1.5 dB"]
      },
      {
        q: "A transmitting antenna has a gain of 10 dB over a dipole. How much is the equivalent gain with respect to an isotopic radiator?",
        a: "12.15 dBi",
        options: ["7.85 dBd", "12.15 dBi", "12.15 dBd", "7.85 dBi"]
      },
      {
        q: "A transmitting isotropic antenna has a gain of 6 dB. How much is the equivalent gain over a dipole?",
        a: "3.85 dBd",
        options: ["3.85 dBi", "8.15 dBd", "3.85 dBd", "8.15 dBi"]
      },
      {
        q: "The effective radiated power of an antenna that has a gain of 6 dBi and transmitter power of 1 kW is",
        a: "36 dBW",
        options: ["36 dBm", "16 000 watts", "36 dBW", "36 dBi"]
      },
      {
        q: "The region directly around the antenna where the electric and magnetic fields are distinct.",
        a: "Near field",
        options: ["Far field", "Fraunhofer zone", "Near field", "Electromagnetic field"]
      },
      {
        q: "The radio wave beyond about one wavelength from the antenna.",
        a: "Far field",
        options: ["Fresnel zone", "Electromagnetic field", "Far field", "Near field"]
      },
      {
        q: "The near field is also referred to as",
        a: "Fresnel zone",
        options: ["Fresnel zone", "Fraunhofer zone", "Magnetic field", "Electric field"]
      },
      {
        q: "The far field is also referred to as",
        a: "Fraunhofer zone",
        options: ["Fraunhofer zone", "Electric field", "Magnetic field", "Fresnel zone"]
      },
      {
        q: "Most wireless applications use the far field wave. And any antenna radiation patterns are valid only if measurements are taken on the far field. The near field is rarely used, but these applications make use of the near field..",
        a: "RFID and NFC",
        options: ["Zigbee", "Wifi", "RFID and NFC", "Bluetooth"]
      },
      {
        q: "For a frequency of 593 MHz, which distance from the antenna is in the far field region?",
        a: "20 ft",
        options: ["10 ft", "1.66 ft", "15 ft", "20 ft"]
      },
      {
        q: "At a frequency of 2.4 GHz, which distance from the antenna is in the near field region?",
        a: "1 m",
        options: ["5 m", "1 m", "2 m", "3 m"]
      },
      {
        q: "The ratio of the electric field strength of a radiated wave to the magnetic field strength is a constant referred to as the wave impedance, and is",
        a: "377 Ω",
        options: ["36.5 Ω", "377 Ω", "93 Ω", "73 Ω"]
      },
      {
        q: "For most media in which EM waves can propagate the value of permeability is the same as for free space and this is equal to",
        a: "4π×10^-7 H/m",
        options: ["4π×10^-7 H/m", "4π×10^-7 F/m", "3.854×10^-12 H/m", "8.854×10^-12 F/m"]
      },
      {
        q: "For most media in which EM waves can propagate the value of permittivity is the same as for free space and this is equal to",
        a: "8.854×10^-12 F/m",
        options: ["8.854×10^-12 F/m", "4π×10^-7 F/m", "4π×10^-7 H/m", "8.854×10^-12 H/m"]
      },
      {
        q: "Three feet is one wavelength at a frequency of",
        a: "328 MHz",
        options: ["100 MHz", "164 MHz", "328 MHz", "300 MHz"]
      },
      {
        q: "The length of a doublet at 27-MHz is",
        a: "18.2 ft",
        options: ["34.67 ft", "8.67 ft", "18.2 ft", "17.3 ft"]
      },
      {
        q: "An EM wave that propagates directly from the transmitting to the receiving antenna",
        a: "Space wave",
        options: ["Space wave", "Sky wave", "Surface wave", "Ground wave"]
      },
      {
        q: "A vertically polarized EM wave that propagates along the surface of the earth.",
        a: "Ground wave",
        options: ["Sky wave", "Direct wave", "Space wave", "Ground wave"]
      },
      {
        q: "An EM wave that is returned to earth by the ionosphere",
        a: "Sky wave",
        options: ["Space wave", "Ground wave", "Surface wave", "Sky wave"]
      },
      {
        q: "The ionosphere causes radio signals to be",
        a: "Refracted",
        options: ["Absorbed", "Refracted", "Reflected", "Diffused"]
      },
      {
        q: "The shortest distance from a transmitter, measured along the surface of the earth, at which a sky wave of fixed frequency will be returned to earth.",
        a: "Skip distance",
        options: ["Skip distance", "Carrier frequency", "Maximum usable frequency", "Critical frequency"]
      },
      {
        q: "The highest frequency that can be used for sky wave communication between two given points on earth.",
        a: "Maximum usable frequency",
        options: ["Maximum usable frequency", "Space wave", "Skip distance", "Critical frequency"]
      },
      {
        q: "The highest frequency that will be returned down to earth by the ionosphere after having beamed straight up at it.",
        a: "critical frequency",
        options: ["maximum usable frequency", "carrier frequency", "resonant frequency", "critical frequency"]
      },
      {
        q: "The type of radio wave responsible for long distance communications by multiple skips is the",
        a: "Sky wave",
        options: ["Direct wave", "Sky wave", "Ground wave", "Surface wave"]
      },
      {
        q: "Line-of-sight communications is NOT a factor in which frequency range?",
        a: "HF",
        options: ["Microwave", "HF", "VHF", "UHF"]
      },
      {
        q: "The ionosphere has its greatest effects on signals in what frequency range?",
        a: "3 to 30 MHz",
        options: ["30 to 300 MHz", "3 to 30 MHz", "300 KHz to 3 MHz", "Above 300 MHz"]
      },
      {
        q: "Which layers in the ionosphere primarily exist only during daylight hours?",
        a: "D and E layers",
        options: ["D and F layers", "E and F layers", "D and E layers", "F1 and F2 layers"]
      },
      {
        q: "Find the characteristic impedance of glass with a relative permittivity of 7.8.",
        a: "A. 135 Ω",
        options: ["A. 135 Ω", "B. 377 Ω", "C. 1052 Ω", "D. 93 Ω"]
      },
      {
        q: "Find the propagation velocity of radio waves in glass with a relative permittivity of 7.8.",
        a: "B. 107.4×10^6 m/s",
        options: ["A. 3×10^8 m/s", "B. 107.4×10^6 m/s", "C. 10.74×10^6 m/s", "D. 107.4×10^8 m/s"]
      },
      {
        q: "A boat is equipped with a VHF marine radio, which it uses to communicate with other nearby boats and shore stations. If the antenna on the boat is 2.3 m above the water, calculate the maximum distance for communication with another boat, but using the shore station as a repeater.",
        a: "D. D(km)=51.18 km",
        options: ["A. D(km)=12.50 mi", "B. D(km)=25.59 km", "C. D(km)=12.50 km", "D. D(km)=51.18 km"]
      },
      {
        q: "A boat is equipped with a VHF marine radio, which it uses to communicate with other nearby boats and shore stations. If the antenna on the boat is 2.3 m above the water, calculate the maximum distance for communication with a shore station with an antenna on a tower 22 m above the water level",
        a: "B. D(km)=25.59 km",
        options: ["A. D(km)=12.50 mi", "B. D(km)=25.59 km", "C. D(km)=12.50 km", "D. D(km)=51.18 km"]
      },
      {
        q: "A paging system has a transmitting antenna located 50 m above average terrain. How far away could the signal be received by a pager carried 1.2 m above the ground?",
        a: "A. D(km)=33.67 km",
        options: ["A. D(km)=33.67 km", "B. D(km)=58.31 km", "C. D(km)=9.03 km", "D. D(km)=33.67 mi"]
      },
      {
        q: "An FM broadcast station has a transmitting antenna located 50 m above average terrain. How far away could the signal be received by a car radio with an antenna 1.5 m above the ground?",
        a: "B. D=34.20 km",
        options: ["A. D=10.10 km", "B. D=34.20 km", "C. D=34.20 mi", "D. D=58.31 km"]
      },
      {
        q: "An FM broadcast station has a transmitting antenna located 50 m above average terrain. How far away could the signal be received by rooftop antenna 12 m above the ground?",
        a: "C. D=43.43 km",
        options: ["A. D=14.28 km", "B. D=28.56 km", "C. D=43.43 km", "D. D=58.31 km"]
      },
      {
        q: "A transmitter has an output power of 50 W. It is connected to its antenna by a feedline that is 25 meters long and properly matched. The loss in the feedline is 5 dB/100 m. The antenna has a gain of 8.5 dBi. What is the EIRP in the direction of maximum antenna gain?",
        a: "A. EIRP=24.25 dBW",
        options: ["A. EIRP=24.25 dBW", "B. EIRP=15.75 dBW", "C. EIRP=24.25 dBmW", "D. EIRP=24.25 dB"]
      },
      {
        q: "A transmitter has an output power of 50 W. It is connected to its antenna by a feedline that is 25 meters long and properly matched. The loss in the feedline is 5 dB/100 m. The antenna has a gain of 8.5 dBi. What is the electric field strength at the same place as in (c)?",
        a: "B. E=89.4 mV/m",
        options: ["A. E=89.4 mW/m", "B. E=89.4 mV/m", "C. E=89.4 μV/m", "D. E=89.4 mV/m^2"]
      },
      {
        q: "A transmitter has an output power of 50 W. It is connected to its antenna by a feedline that is 25 meters long and properly matched. The loss in the feedline is 5 dB/100 m. The antenna has a gain of 8.5 dBi. What is the power density 1 km from the antenna in the direction of maximum gain, assuming free space propagation?",
        a: "D. P_D=21.2 μW/m^2",
        options: ["A. P_D=2.12 μW/m^2", "B. P_D=21.2 mW/m^2", "C. P_D=21.2 nW/m^2", "D. P_D=21.2 μW/m^2"]
      },
      {
        q: "An isotropic source radiates 100 W of power in free space. At a distance of 15 km from the source, calculate the power density.",
        a: "B. 35.4 nW/m^2",
        options: ["A. 3.54 nW/m^2", "B. 35.4 nW/m^2", "C. 354 nW/m^2", "D. 35.4 mV/m^2"]
      },
      {
        q: "An isotropic source radiates 100 W of power in free space. At a distance of 15 km from the source, calculate the electric field intensity.",
        a: "D. 3.65 mW/m",
        options: ["A. 36.5 mV/m", "B. 365 mV/m", "C. .65 mV/m", "D. 3.65 mW/m"]
      }
    ],


    
  POWER_AND_VOLTAGE_CONVERSIONS: [
    {
      q: "100 mW of power is equivalent to",
      a: "-10 dBW",
      options: ["-10 dBW", "10 dBm", "0 dBm", "20 dBW"]
    },
    {
      q: "0 dBmW is equivalent to",
      a: "1 mW",
      options: ["0 Watt", "100 mW", "1 mW", "10 mW"]
    },
    {
      q: "In dBuV, I milliVolt is equivalent to",
      a: "60",
      options: ["60", "-30", "30", "-60"]
    },
    {
      q: "If 20 dB is a voltage gain, then this is equivalent to a linear gain of",
      a: "10",
      options: ["10", "01", "100", "1000"]
    },
    {
      q: "100 µV is equivalent to",
      a: "-20 dBmV",
      options: ["-20 dBμV", "-20 dBmV", "-40 dBμV", "-40 dBmV"]
    },
    {
      q: "120 dBuV is equivalent to",
      a: "1 volt",
      options: ["1 volt", "10 Volts", "10 mV", "1 mV"]
    },
    {
      q: "5 volts is equivalent to",
      a: "73.98 dBmV",
      options: ["73.98 dBμV", "73.98 dBmV", "-33.98 dBμV", "133.98 dBmV"]
    }
  ],
  AMPLIFIERS_FILTERS_AND_CIRCUITS: [
    {
      q: "Three cascaded amplifiers have power gains of 5 dB, 10 dB and 15 dB. If the input power is 30 dBmW (or dBm), what is the output power?",
      a: "60 dBm",
      options: ["60 dBm", "1000 mW", "60 dBW", "100 W"]
    },
    {
      q: "A circuit consists of two amplifiers with gains of 6 dB and 9 dB and one filter with attenuation of -20 dB. If the output voltage is 0 dBV, what is the input voltage?",
      a: "5.0 dBV",
      options: ["1.78 dBV", "5.0 dBV", "-5.04 dBV", "0.56 V"]
    },
    {
      q: "For the system shown, given an overall gain is 20 dB, compute V_2??? V_in=??? V_out=7V A_1 V_1 V_2=?? A_2 V_3 A_3 A_4 A_1=0.25 A_2=??? A_3=0.5 A_4=15",
      a: "V_2=0.93 V",
      options: ["V_2=0.175 V", "V_2=0.47 V", "V_2=0.7 V", "V_2=0.93 V"]
    },
    {
      q: "A circuit consists of two amplifiers with gains of 5 dB and 15 dB and two filters with attenuations of -10 dB and -4 dB. If the output power is 20 dBm, what is the input power?",
      a: "0.025 W",
      options: ["2.5 W", "25 W", "0.25 W", "0.025 W"]
    },
    {
      q: "A filter block has an attenuation factor of 0.25. What amplifier gain in dB is needed to ensure an output power of 1 watt for an input power of 0 dBm?",
      a: "36 dB",
      options: ["36 dB", "30 dBm", "30 dB", "36 dBm"]
    }
  ],
  MODULATION_THEORY: [
    {
      q: "Which of the following is not true about AM?",
      a: "The carrier frequency changes",
      options: ["The information signal amplitude changes the carrier amplitude", "The carrier frequency changes", "The carrier frequency remains constant", "The carrier amplitude varies"]
    },
    {
      q: "Both FM and PM are types of what kind of modulation?",
      a: "Angle",
      options: ["Phase", "Linear", "Duty cycle", "Angle"]
    },
    {
      q: "The process of translating a signal, with or without modulation, to a higher or lower frequency for processing is called",
      a: "Frequency conversion",
      options: ["Frequency shift", "Frequency conversion", "Frequency division", "Frequency multiplication"]
    },
    {
      q: "The outline of the peaks of a carrier has the shape of the modulating signal and is called the",
      a: "Envelope",
      options: ["Envelope", "Trace", "Carrier variation", "Waveshape"]
    },
    {
      q: "A carrier of 880 kHz is modulated by a 3.5 kHz sine wave. The LSB and USB are, respectively",
      a: "876.5 and 883.5 kHz",
      options: ["876.5 and 883.5 kHz", "873 and 887 kHz", "883.5 and 876.5 kHz", "887 and 873 kHz"]
    },
    {
      q: "If the modulation index m is greater than 1 in AM, what happens?",
      a: "Information signal is distorted",
      options: ["Carrier drops to zero", "Carrier frequency shifts", "Information signal is distorted", "Normal operation"]
    },
    {
      q: "The process of separating the original information or signal from the modulated carrier",
      a: "Demodulation",
      options: ["Demodulation", "Mixing", "Heterodyning", "Conversion"]
    },
    {
      q: "The new signals produced by modulation are called",
      a: "Sidebands",
      options: ["Spurious emissions", "Intermodulation products", "Sidebands", "Harmonics"]
    },
    {
      q: "A carrier is simultaneously modulated by two sine waves with modulation indices of 0.3 and 0.4; the total modulation index",
      a: "Is 0.5",
      options: ["Cannot be calculated", "Is 0.7", "Is 0.5", "Is 1"]
    },
    {
      q: "Having an information signal change some characteristic of a carrier signal is called",
      a: "Modulation",
      options: ["Linear mixing", "Modulation", "Multiplexing", "Duplexing"]
    },
    {
      q: "An AM signal with a maximum modulating signal frequency of 4.5 kHz has a total bandwidth of",
      a: "9 kHz",
      options: ["18 kHz", "9 kHz", "6.75 kHz", "4.5 kHz"]
    },
    {
      q: "The typical audio modulating frequency range used in radio and telephone communications is",
      a: "300 Hz to 3 kHz",
      options: ["100 Hz to 10 kHz", "50 Hz to 5 kHz", "300 Hz to 3 kHz", "50 Hz to 15 kHz"]
    },
    {
      q: "An input signal of 1.8 MHz is mixed with a local oscillator of 5 MHz. A filter selects the difference signal. The output is",
      a: "3.2 MHz",
      options: ["1.8 MHz", "6.8 MHz", "3.2 MHz", "5 MHz"]
    },
    {
      q: "In an AM signal, the transmitted information is contained within the",
      a: "Sidebands",
      options: ["Sidebands", "Envelope", "Carrier", "Modulating signal"]
    },
    {
      q: "The output of an SSB transmitter with a 3.85 MHz carrier and a 1.5 kHz sine wave modulating tone is",
      a: "A 3.8485 MHz sine wave",
      options: ["3848.5 and 3851.5 MHz sine wave", "A 3.8485 MHz sine wave", "3.85, 3.8485, and 3.8515 MHz sine wave", "A 3.85 MHz sine wave"]
    },
    {
      q: "An AM transmitter antenna current is measured with no modulation and found to be 2.6 amperes. With modulation, the current rises to 2.9 amperes. The percent modulation is",
      a: "70 percent",
      options: ["35 percent", "89 percent", "70 percent", "42 percent"]
    },
    {
      q: "An AM signal has a carrier power of 5W. The percentage of modulation is 80 percent. The total sideband power is",
      a: "1.6 W",
      options: ["1.6 W", "4.0 W", "0.8 W", "2.5 W"]
    },
    {
      q: "A 200 kHz carrier is modulated by a 2.5 kHz signal. The fourth pair of sidebands are spaced from the carrier by",
      a: "10 kHz",
      options: ["15 kHz", "2.5 kHz", "10 kHz", "5 kHz"]
    },
    {
      q: "The ratio of the peak modulating signal voltage to the peak carrier voltage is referred to as",
      a: "Modulation index",
      options: ["Mix factor", "Voltage ratio", "Decibels", "Modulation index"]
    },
    {
      q: "The values of Vmax and Vmin as read from an AM wave on an oscilloscope are 2.8 and 0.3. The percentage of modulation is",
      a: "80.6 percent",
      options: ["93.3 percent", "41.4 percent", "80.6 percent", "10.7 percent"]
    },
    {
      q: "A display of signal amplitude versus frequency is called the",
      a: "Frequency spectrum",
      options: ["Frequency spectrum", "Frequency domain", "Amplitude spectrum", "Time domain"]
    },
    {
      q: "A device for locking onto and tracking the frequency of an incoming signal",
      a: "Phase lock loop",
      options: ["Low pass filter", "Phase lock loop", "Voltage-controlled oscillator", "Mixer"]
    },
    {
      q: "Noise is primarily",
      a: "Random level shifts",
      options: ["Random level shifts", "Low-frequency variations", "Random frequency variations", "High-frequency spikes"]
    },
    {
      q: "Most of the power in an AM signal is in the",
      a: "Carrier",
      options: ["Carrier", "Lower sideband", "Modulating signal", "Upper sideband"]
    },
    {
      q: "An AM signal without the carrier is called a(n)",
      a: "DSB",
      options: ["SSB", "FM signal", "DSB", "Vestige sideband"]
    },
    {
      q: "The amount of frequency deviation from the carrier center frequency in an FM transmitter is proportional to what characteristic of the modulating signal?",
      a: "Amplitude",
      options: ["Shape", "Phase", "Frequency", "Amplitude"]
    },
    {
      q: "An AM transmitter has a percentage of modulation of 88. The carrier power is 440 W. The power in one sideband is",
      a: "85 W",
      options: ["170 W", "110 W", "610 W", "85 W"]
    },
    {
      q: "The main advantage of SSB over standard AM or DSB is",
      a: "Less spectrum space is used",
      options: ["Less spectrum space is used", "Less power is consumed", "Simple equipment is used", "A higher modulation percentage"]
    },
    {
      q: "For 100 percent modulation, what percentage of power is in each sideband?",
      a: "16.65 percent",
      options: ["16.65 percent", "100 percent", "33.3 percent", "50 percent"]
    },
    {
      q: "What is the minimum AM signal needed to transmit information?",
      a: "One sideband",
      options: ["Carrier only", "One sideband", "Carrier plus sidebands", "Both sidebands"]
    }
  ],
  SIGNAL_SPECTRA_IDENTIFICATION: [
    {
      q: "The output spectrum consists of the upper and lower sidebands.",
      a: "the statement applies only to DSB signal.",
      options: ["the statement applies only to conventional AM", "the statement applies to Conv AM, DSB and SSB", "the statement applies only to an SSB signal", "the statement applies only to DSB signal.", "the statement applies only to Conv AM and DSB"]
    },
    {
      q: "The output spectrum consists of the difference between the carrier frequency and all the baseband frequency components",
      a: "the statement applies only to an SSB signal",
      options: ["the statement applies only to DSB signal.", "the statement applies only to an SSB signal", "the statement applies to DSB and SSB", "the statement applies only to conventional AM", "the statement applies to Conv AM, DSB and SSB"]
    },
    {
      q: "The output spectrum consists of the carrier frequency and the upper and lower sideband frequencies",
      a: "the statement applies only to conventional AM",
      options: ["the statement applies to Conv AM, DSB and SSB", "the statement applies only to conventional AM", "the statement applies only to Conv AM and DSB", "the statement applies only to DSB signal.", "the statement applies only to an SSB signal"]
    },
    {
      q: "Altering the amplitude of the high-frequency carrier in accordance with the amplitude of the modulating signal",
      a: "the statement applies to Conv AM, DSB and SSB",
      options: ["the statement applies to Conv AM, DSB and SSB", "the statement applies only to an SSB signal", "the statement applies only to conventional AM", "the statement applies only to DSB signal", "the statement applies to DSB and SSB"]
    },
    {
      q: "The output spectrum consists of the sum between the carrier frequency and all the baseband frequency components",
      a: "the statement applies only to an SSB signal",
      options: ["the statement applies to DSB and SSB", "the statement applies only to Conv AM and DSB", "the statement applies only to an SSB signal", "the statement applies only to DSB signal", "the statement applies only to conventional AM"]
    },
    {
      q: "The baseband and transmission bandwidth are equal.",
      a: "the statement applies only to an SSB signal",
      options: ["the statement applies only to an SSB signal", "the statement applies to Conv AM, DSB and SSB", "the statement applies only to Conv AM and DSB", "the statement applies only to conventional AM", "the statement applies only to DSB signal."]
    },
    {
      q: "RF transmission bandwidth requirement is the lowest.",
      a: "the statement applies only to an SSB signal",
      options: ["the statement applies only to conventional AM", "the statement applies to DSB and SSB", "the statement applies only to DSB signal", "the statement applies only to an SSB signal", "the statement applies only to Conv AM and DSB"]
    }
  ]


  };



  // Derived LAW_ALL pool
  data.LAW_ALL = [
    ...(data.LAW_RA10844 || []),
    ...(data.LAW_RA11363 || []),
    ...(data.LAW_RA11934 || []),
    ...(data.LAW_RA3846 || []),
    ...(data.LAW_RA7925 || []),
    ...(data.LAW_RA12234 || []),
    ...(data.LAW_RA9292 || [])
  ];

  // Combined ALL topics
  data.ALL = [
    ...(data.OSI_DATA_COMMS || []),
    ...(data.HW_CABLING_TOOLS || []),
    ...(data.IP_ADDRESSING_SUBNET || []),
    ...(data.EXERCISE_OSI_TCP_IP || []),
    ...(data.RF_ANTENNAS_WAVES || []),
    ...(data.POWER_AND_VOLTAGE_CONVERSIONS || []),
    ...(data.AMPLIFIERS_FILTERS_AND_CIRCUITS || []),
    ...(data.MODULATION_THEORY || []),
    ...(data.SIGNAL_SPECTRA_IDENTIFICATION || []),
    ...data.LAW_ALL
  ];

  return data;
})();