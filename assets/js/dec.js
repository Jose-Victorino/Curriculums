const programCurriculum = {
  IT: {
    core: {
      'CSS121': [1, 1, 'CSS121', 'COMPUTER PROGRAMMING 1', 3, '-', 2, '', '', ''],
      'CSS121L': [1, 1, 'CSS121L', 'COMPUTER PROGRAMMING LABORATORY 1', '-', 4.5, 1, '', 'CSS121', ''],
      'FW01-1': [1, 1, 'FW01-1', 'PHYSICAL ACTIVITIES TOWARD HEALTH AND FITNESS 1 (PATHFIT 1): MOVEMENT COMPETENCY TRAINING', 3, '-', 2, '', '', ''],
      'GED101': [1, 1, 'GED101', 'UNDERSTANDING THE SELF', 4.5, '-', 3, '', '', ''],
      'GED117': [1, 1, 'GED117', 'GREAT BOOKS', 4.5, '-', 3, '', '', ''],
      'ITS100': [1, 1, 'ITS100', 'INTRODUCTION TO INFORMATION TECHNOLOGY', 4.5, '-', 3, '', '', ''],
      'NSTP100': [1, 1, 'NSTP100', 'NATIONAL SERVICE TRAINING PROGRAM 1', '-', 4.5, 1.5, '', '', ''],
      'CSS122': [1, 2, 'CSS122', 'COMPUTER PROGRAMMING 2', 3, '-', 2, 'CSS121, CSS121L', '', ''],
      'CSS122L': [1, 2, 'CSS122L', 'COMPUTER PROGRAMMING LABORATORY 2', '-', 4.5, 1, 'CSS121, CSS121L', 'CSS122', ''],
      'FW02-1': [1, 2, 'FW02-1', 'PHYSICAL ACTIVITIES TOWARD HEALTH AND FITNESS 2 (PATHFIT 2): EXERCISE-BASED FITNESS ACTIVITIES', 3, '-', 2, 'FW01-1', '', ''],
      'GED103': [1, 2, 'GED103', 'READINGS IN PHILIPPINE HISTORY', 4.5, '-', 3, '', '', ''],
      'GED108': [1, 2, 'GED108', 'ART APPRECIATION', 4.5, '-', 3, '', '', ''],
      'ISS120': [1, 2, 'ISS120', 'INFORMATION SYSTEMS AND BUSINESS PROCESSES', 4.5, '-', 3, 'ITS100', '', ''],
      'ITS110L': [1, 2, 'ITS110L', 'COMPUTER HARDWARE AND TROUBLESHOOTING', '-', 4.5, 1, '', '', ''],
      'NSTP200': [1, 2, 'NSTP200', 'NATIONAL SERVICE TRAINING PROGRAM 2', '-', 4.5, 1.5, 'NSTP100', '', ''],
      'FW03-1': [1, 3, 'FW03-1', 'PHYSICAL ACTIVITIES TOWARD HEALTH AND FITNESS 3 (PATHFIT 3): DANCE / MARTIAL ARTS', 3, '-', 2, 'FW01-1, FW01-2', '', ''],
      'GED102': [1, 3, 'GED102', 'MATHEMATICS IN THE MODERN WORLD', 4.5, '-', 3, '', '', ''],
      'GED104': [1, 3, 'GED104', 'SCIENCE, TECHNOLOGY AND SOCIETY', 4.5, '-', 3, '', '', ''],
      'ITS112': [1, 3, 'ITS112', 'COMPUTER ARCHITECTURE AND ORGANIZATION', 3, '-', 2, 'CSS121, CSS121L', '', ''],
      'ITS112L': [1, 3, 'ITS112L', 'COMPUTER ARCHITECTURE AND ORGANIZATION LABORATORY', '-', 4.5, 1, 'CSS121, CSS121L', 'ITS112', ''],
      'ITS121L': [1, 3, 'ITS121L', 'WEB SYSTEMS AND TECHNOLOGIES 1 LABORATORY', '-', 4.5, 1, 'CSS121, CSS121L', '', ''],
      'ITS131': [1, 3, 'ITS131', 'INFORMATION MANAGEMENT', 3, '-', 2, 'CSS121, CSS121L', '', ''],
      'ITS131L': [1, 3, 'ITS131L', 'INFORMATION MANAGEMENT LABORATORY', '-', 4.5, 1, 'CSS121, CSS121L', 'ITS131', ''],
      'NSTP300': [1, 3, 'NSTP300', 'NATIONAL SERVICE TRAINING PROGRAM 3', '-', 4.5, 1.5, 'NSTP200', '', ''],
      'CSS130': [1, 4, 'CSS130', 'DATA STRUCTURES AND ALGORITHMS', 4.5, '-', 3, 'CSS122, CSS122L', '', ''],
      'FW04-1': [1, 4, 'FW04-1', 'PHYSICAL ACTIVITIES TOWARD HEALTH AND FITNESS 4 (PATHFIT 4): GROUP EXERCISE', 3, '-', 2, 'FW01-1, FW02-1, FW03-1', '', ''],
      'GED105': [1, 4, 'GED105', 'THE CONTEMPORARY WORLD', 4.5, '-', 3, '', '', ''],
      'GED110': [1, 4, 'GED110', 'PEOPLE AND EARTH S ECOSYSTEM', 4.5, '-', 3, '', '', ''],
      'ITS150': [1, 4, 'ITS150', 'OPERATING SYSTEMS', 3, '-', 2, 'ITS121, ITS121L', '', ''],
      'ITS150L': [1, 4, 'ITS150L', 'OPERATING SYSTEMS LABORATORY', '-', 4.5, 1, 'ITS121, ITS121L', 'ITS150', ''],
      'ITS161L': [1, 4, 'ITS161L', 'FUNDAMENTALS OF COMPUTER NETWORK 1', '-', 4.5, 1, 'CSS121, CSS121L', '', ''],
      'NSTP400': [1, 4, 'NSTP400', 'NATIONAL SERVICE TRAINING PROGRAM 4', '-', 4.5, 1.5, 'NSTP300', '', ''],
      'CSS123': [2, 1, 'CSS123', 'OBJECT-ORIENTED PROGRAMMING', 3, '-', 2, 'ITS131, ITS131L', '', ''],
      'CSS123L': [2, 1, 'CSS123L', 'OBJECT-ORIENTED PROGRAMMING LABORATORY', '-', 4.5, 1, 'ITS131, ITS131L', 'CSS123', ''],
      'CSS131': [2, 1, 'CSS131', 'DISCRETE MATHEMATICS 1', 4.5, '-', 3, 'CSS121, CSS121L', '', ''],
      'CSS140': [2, 1, 'CSS140', 'ARTIFICIAL INTELLIGENCE', 4.5, '-', 3, 'CSS130', '', ''],
      'ITS162L': [2, 1, 'ITS162L', 'FUNDAMENTALS OF COMPUTER NETWORK 2', '-', 9, 2, 'ITS161L', '', ''],
      'MATH154-1': [2, 1, 'MATH154-1', 'QUANTITATIVE METHODS', 4.5, '-', 3, '', '', ''],
      'CSS124': [2, 2, 'CSS124', 'EVENT-DRIVEN/GUI PROGRAMMING', 3, '-', 2, 'CSS123, CSS123L', '', ''],
      'CSS124L': [2, 2, 'CSS124L', 'EVENT-DRIVEN/GUI PROGRAMMING LABORATORY', '-', 4.5, 1, 'CSS123, CSS123L', 'CSS124', ''],
      'CSS145': [2, 2, 'CSS145', 'INTRODUCTION TO DATA SCIENCE', 4.5, '-', 3, 'ITS131, ITS131L', '', ''],
      'GED109': [2, 2, 'GED109', 'GENDER AND SOCIETY', 4.5, '-', 3, '', '', ''],
      'ITS122': [2, 2, 'ITS122', 'WEB SYSTEMS AND TECHNOLOGIES 2', 3, '-', 2, 'ITS121L, ITS131, ITS131L', '', ''],
      'ITS122L': [2, 2, 'ITS122L', 'WEB SYSTEMS AND TECHNOLOGIES 2 LABORATORY', '-', 4.5, 1, 'ITS121L, ITS131, ITS131L', 'ITS122', ''],
      'ITS163L': [2, 2, 'ITS163L', 'ADVANCED COMPUTER NETWORK 1', '-', 9, 2, 'ITS162L', '', ''],
      'GED106': [2, 3, 'GED106', 'PURPOSIVE COMMUNICATION', 4.5, '-', 3, '', '', ''],
      'ITS132': [2, 3, 'ITS132', 'DATA WAREHOUSING AND DATA MINING', 3, '-', 2, 'CSS145, ITS131, ITS131L', '', ''],
      'ITS132L': [2, 3, 'ITS132L', 'DATA WAREHOUSING AND DATA MINING LABORATORY', '-', 4.5, 1, 'CSS145, ITS131, ITS131L', 'ITS132', ''],
      'ITS141': [2, 3, 'ITS141', 'HUMAN-COMPUTER INTERACTION 1', 4.5, '-', 3, 'CSS124, CSS124L', '', ''],
      'ITS151': [2, 3, 'ITS151', 'SYSTEMS INTEGRATION AND ARCHITECTURE 1', 3, '-', 2, 'CSS124, CSS124L, ISS120', '', ''],
      'ITS151L': [2, 3, 'ITS151L', 'SYSTEMS INTEGRATION AND ARCHITECTURE 1 LABORATORY', '-', 4.5, 1, 'CSS124, CSS124L, ISS120', 'ITS151', ''],
      'ITS164L': [2, 3, 'ITS164L', 'ADVANCED COMPUTER NETWORK 2', '-', 4.5, 1, 'ITS163L', '', ''],
      'ITS165': [2, 3, 'ITS165', 'INFORMATION ASSURANCE AND SECURITY 1', 4.5, '-', 3, 'ITS131, ITS131L, ITS161L', '', ''],
      'GED107': [2, 4, 'GED107', 'ETHICS', 4.5, '-', 3, '', '', ''],
      'ITS142': [2, 4, 'ITS142', 'HUMAN-COMPUTER INTERACTION 2', 3, '-', 2, 'ITS141', '', ''],
      'ITS142L': [2, 4, 'ITS142L', 'HUMAN-COMPUTER INTERACTION 2 LABORATORY', '-', 4.5, 1, 'ITS141', 'ITS142', ''],
      'ITS152': [2, 4, 'ITS152', 'SYSTEMS INTEGRATION AND ARCHITECTURE 2', 3, '-', 2, 'ITS151, ITS151L', '', ''],
      'ITS152L': [2, 4, 'ITS152L', 'SYSTEMS INTEGRATION AND ARCHITECTURE 2 LABORATORY', '-', 4.5, 1, 'ITS151, ITS151L', 'ITS152', ''],
      'RZL110': [2, 4, 'RZL110', 'THE LIFE AND WORKS OF RIZAL', 4.5, '-', 3, '', '', ''],
      'ITS109': [3, 1, 'ITS109', 'RESEARCH METHODS IN INFORMATION TECHNOLOGY', 4.5, '-', 3, 'ITS152, ITS152L', '', ''],
      'ITS120': [3, 1, 'ITS120', 'APPLICATION DEVELOPMENT AND EMERGING TECHNOLOGIES', 3, '-', 2, 'CSS124, CSS124L', '', ''],
      'ITS120L': [3, 1, 'ITS120L', 'APPLICATION DEVELOPMENT AND EMERGING TECHNOLOGIES LABORATORY', '-', 4.5, 1, 'CSS124, CSS124L', '', ''],
      'ITS153': [3, 1, 'ITS153', 'SYSTEMS ADMINISTRATION AND MAINTENANCE', 3, '-', 2, 'ITS152, ITS152L, ITS164L', '', ''],
      'ITS153L': [3, 1, 'ITS153L', 'SYSTEMS ADMINISTRATION AND MAINTENANCE LABORATORY', '-', 4.5, 1, 'ITS152, ITS152L, ITS164L', 'ITS153', ''],
      'ITS166': [3, 1, 'ITS166', 'INFORMATION SECURITY AND ASSURANCE 2', 3, '-', 2, 'ITS165', '', ''],
      'ITS166L': [3, 1, 'ITS166L', 'INFORMATION SECURITY AND ASSURANCE 2 LABORATORY', '-', 4.5, 1, 'ITS165', 'ITS166', ''],
      'CSS153': [3, 2, 'CSS153', 'SOFTWARE QUALITY', 3, '-', 2, 'ITS142, ITS142L', '', ''],
      'CSS153L': [3, 2, 'CSS153L', 'SOFTWARE QUALITY LABORATORY', '-', 4.5, 1, 'ITS142, ITS142L', 'CSS153', ''],
      'ISS160': [3, 2, 'ISS160', 'PROJECT MANAGEMENT', 4.5, '-', 3, 'CSS124, CSS124L', '', ''],
      'ITS105': [3, 2, 'ITS105', 'SOCIAL AND PROFESSIONAL ISSUES', 4.5, '-', 3, 'GED107, ITS141', '', ''],
      'ITS200-1': [3, 2, 'ITS200-1', 'THESIS 1', 1.5, '-', 1, 'ITS109', '', ''],
      'ITS199-1R': [3, 3, 'ITS199-1R', 'PRACTICUM 1', 4.5, '-', 3, 'ITS105', '', ''],
      'ITS200-2': [3, 3, 'ITS200-2', 'THESIS 2', 4.5, '-', 1, 'ITS200-1', '', ''],
      'ITS198F': [3, 4, 'ITS198F', 'CAREER DEVELOPMENT AND SEMINAR IN IT', '-', 4.5, 1, 'FOR GRADUATING STUDENTS ONLY', '', ''],
      'ITS199-2R': [3, 4, 'ITS199-2R', 'PRACTICUM 2', 4.5, '-', 3, 'ITS199-1R', '', ''],
      'ITS200-3': [3, 4, 'ITS200-3', 'THESIS 3', 4.5, '-', 1, 'ITS200-2', '', ''],
      'SGE100X': [3, 4, 'SGE100X', 'STUDENT GLOBAL EXPERIENCE', '-', '-', '(0)', '3RD YEAR STANDING', '', ''],
    },
    elective: {
      'CSS171': [3, 3, 'CSS171', 'GRAPHICS AND VISUAL COMPUTING', 4.5, '-', 3, 'CSS124, CSS124L', '', ''],
      'CSS172': [3, 3, 'CSS172', 'PATTERN RECOGNITION', 4.5, '-', 3, 'CSS124, CSS124L', '', ''],
      'CSS173': [3, 3, 'CSS173', 'PARALLEL AND DISTRIBUTED COMPUTING', 4.5, '-', 3, 'CSS124, CSS124L', '', ''],
      'ECS176': [3, 3, 'ECS176', 'INTRODUCTION TO GAME PROGRAMMING', 4.5, '-', 3, 'CSS124, CSS124L', '', ''],
      'ISS170': [3, 3, 'ISS170', 'TECHNOPRENEURSHIP', 4.5, '-', 3, 'ITS132, ITS132L', '', ''],
      'ISS171': [3, 3, 'ISS171', 'SUPPLY CHAIN MANAGEMENT', 4.5, '-', 3, 'ITS131, ITS131L', '', ''],
      'ISS172': [3, 3, 'ISS172', 'CUSTOMER RELATIONS MANAGEMENT', 4.5, '-', 3, 'ITS131, ITS131L', '', ''],
      'ISS173': [3, 3, 'ISS173', 'ESSENTIAL OF SAS', 4.5, '-', 3, 'MATH154-1', '', ''],
      'ISS174': [3, 3, 'ISS174', 'IT AUDIT AND CONTROL', 4.5, '-', 3, 'ITS131, ITS131L', '', ''],
      'ITS170': [3, 3, 'ITS170', 'IT INFRASTRUCTURE LIBRARY FOUNDATION COURSE', 4.5, '-', 3, 'ITS131, ITS131L', '', ''],
      'ITS171': [3, 3, 'ITS171', 'FUNDAMENTALS OF SAP', 4.5, '-', 3, 'ITS131, ITS131L', '', ''],
      'ITS172': [3, 3, 'ITS172', 'MOBILE APPLICATION DEVELOPMENT', 4.5, '-', 3, 'CSS124, CSS124L', '', ''],
      'ITS173': [3, 3, 'ITS173', 'EMBEDDED SYSTEMS', 4.5, '-', 3, 'CSS124, CSS124L', '', ''],
      'ITS174': [3, 3, 'ITS174', 'INTERNET OF THINGS', 4.5, '-', 3, 'CSS124, CSS124L', '', ''],
      'ITS175': [3, 3, 'ITS175', 'CLOUD COMPUTING', 4.5, '-', 3, 'CSS124, CSS124L', '', ''],
    },
  },
};
const courseStatus = {
	'Jose Victorino': {
    core: {
      // 1st Year
      CSS121: 'taken',
      CSS121L: 'taken',
      'FW01-1': 'taken',
      GED101: 'taken',
      GED117: 'taken',
      ITS100: 'taken',
      NSTP100: 'taken',
  
      CSS122: 'taken',
      CSS122L: 'taken',
      'FW02-1': 'taken',
      GED103: 'taken',
      GED108: 'taken',
      ISS120: 'taken',
      ITS110L: 'taken',
      NSTP200: 'taken',
  
      'FW03-1': 'taken',
      GED102: 'taken',
      GED104: 'taken',
      ITS112: 'taken',
      ITS112L: 'taken',
      ITS121L: 'taken',
      ITS131: 'taken',
      ITS131L: 'taken',
      NSTP300: 'taken',
  
      CSS130: 'taken',
      'FW04-1': 'inLoad',
      GED105: 'taken',
      GED110: 'inLoad',
      ITS150: 'inLoad',
      ITS150L: 'inLoad',
      ITS161L: 'inLoad',
      NSTP400: 'taken',
      
      // 2nd Year
      CSS123: 'taken',
      CSS123L: 'taken',
      CSS131: 'inLoad',
      CSS140: 'notTaken',
      ITS162L: 'notTaken',
      'MATH154-1': 'taken',
  
      CSS124: 'taken',
      CSS124L: 'taken',
      CSS145: 'taken',
      GED109: 'taken',
      ITS122: 'notTaken',
      ITS122L: 'notTaken',
      ITS163L: 'notTaken',
  
      GED106: 'inLoad',
      ITS132: 'notTaken',
      ITS132L: 'notTaken',
      ITS141: 'notTaken',
      ITS151: 'notTaken',
      ITS151L: 'notTaken',
      ITS164L: 'notTaken',
      ITS165: 'notTaken',
  
      GED107: 'taken',
      ITS142: 'notTaken',
      ITS142L: 'notTaken',
      ITS152: 'notTaken',
      ITS152L: 'notTaken',
      RZL110: 'inLoad',
  
      // 3rd Year
      ITS109: 'notTaken',
      ITS120: 'notTaken',
      ITS120L: 'notTaken',
      ITS153: 'notTaken',
      ITS153L: 'notTaken',
      ITS166: 'notTaken',
      ITS166L: 'notTaken',
  
      CSS153: 'notTaken',
      CSS153L: 'notTaken',
      ISS160: 'notTaken',
      ITS105: 'notTaken',
      'ITS200-1': 'notTaken',
      
      'ITS199-1R': 'notTaken',
      'ITS200-2': 'notTaken',
      
      ITS198F: 'preReq',
      'ITS199-2R': 'notTaken',
      'ITS200-3': 'notTaken',
      SGE100X: 'notTaken',
    },
		elective: {
      CSS171: 'notTaken',
      CSS172: 'notTaken',
      CSS173: 'notTaken',
      ECS176: 'notTaken',
      ISS170: 'notTaken',
      ISS171: 'notTaken',
      ISS172: 'notTaken',
      ISS173: 'notTaken',
      ISS174: 'notTaken',
      ITS170: 'notTaken',
      ITS171: 'notTaken',
      ITS172: 'notTaken',
      ITS173: 'notTaken',
      ITS174: 'notTaken',
      ITS175: 'notTaken',
    },
	},
	'Marion Clanza': {
    core: {
      // 1st Year
      CSS121: 'taken',
      CSS121L: 'taken',
      'FW01-1': 'taken',
      GED101: 'taken',
      GED117: 'taken',
      ITS100: 'taken',
      NSTP100: 'taken',
  
      CSS122: 'taken',
      CSS122L: 'taken',
      'FW02-1': 'taken',
      GED103: 'taken',
      GED108: 'taken',
      ISS120: 'notTaken',
      ITS110L: 'taken',
      NSTP200: 'taken',
  
      'FW03-1': 'taken',
      GED102: 'taken',
      GED104: 'taken',
      ITS112: 'taken',
      ITS112L: 'taken',
      ITS121L: 'taken',
      ITS131: 'taken',
      ITS131L: 'taken',
      NSTP300: 'taken',
  
      CSS130: 'taken',
      'FW04-1': 'taken',
      GED105: 'taken',
      GED110: 'inLoad',
      ITS150: 'inLoad',
      ITS150L: 'inLoad',
      ITS161L: 'taken',
      NSTP400: 'taken',
      
      // 2nd Year
      CSS123: 'taken',
      CSS123L: 'taken',
      CSS131: 'inLoad',
      CSS140: 'taken',
      ITS162L: 'taken',
      'MATH154-1': 'taken',
  
      CSS124: 'notTaken',
      CSS124L: 'notTaken',
      CSS145: 'taken',
      GED109: 'inLoad',
      ITS122: 'notTaken',
      ITS122L: 'notTaken',
      ITS163L: 'inLoad',
  
      GED106: 'notTaken',
      ITS132: 'notTaken',
      ITS132L: 'notTaken',
      ITS141: 'notTaken',
      ITS151: 'notTaken',
      ITS151L: 'notTaken',
      ITS164L: 'notTaken',
      ITS165: 'notTaken',
  
      GED107: 'notTaken',
      ITS142: 'notTaken',
      ITS142L: 'notTaken',
      ITS152: 'notTaken',
      ITS152L: 'notTaken',
      RZL110: 'taken',
  
      // 3rd Year
      ITS109: 'notTaken',
      ITS120: 'notTaken',
      ITS120L: 'notTaken',
      ITS153: 'notTaken',
      ITS153L: 'notTaken',
      ITS166: 'notTaken',
      ITS166L: 'notTaken',
  
      CSS153: 'notTaken',
      CSS153L: 'notTaken',
      ISS160: 'notTaken',
      ITS105: 'notTaken',
      'ITS200-1': 'notTaken',
      
      'ITS199-1R': 'notTaken',
      'ITS200-2': 'notTaken',
      
      ITS198F: 'preReq',
      'ITS199-2R': 'notTaken',
      'ITS200-3': 'notTaken',
      SGE100X: 'notTaken',
    },
		elective: {
      CSS171: 'notTaken',
      CSS172: 'notTaken',
      CSS173: 'notTaken',
      ECS176: 'notTaken',
      ISS170: 'notTaken',
      ISS171: 'notTaken',
      ISS172: 'notTaken',
      ISS173: 'notTaken',
      ISS174: 'notTaken',
      ITS170: 'notTaken',
      ITS171: 'notTaken',
      ITS172: 'notTaken',
      ITS173: 'notTaken',
      ITS174: 'notTaken',
      ITS175: 'notTaken',
    },
	},
	'Nikkos Dantes': {
    core: {
      // 1st Year
      CSS121: 'taken',
      CSS121L: 'taken',
      'FW01-1': 'taken',
      GED101: 'taken',
      GED117: 'taken',
      ITS100: 'taken',
      NSTP100: 'taken',
  
      CSS122: 'taken',
      CSS122L: 'taken',
      'FW02-1': 'taken',
      GED103: 'taken',
      GED108: 'taken',
      ISS120: 'taken',
      ITS110L: 'taken',
      NSTP200: 'taken',
  
      'FW03-1': 'taken',
      GED102: 'taken',
      GED104: 'taken',
      ITS112: 'taken',
      ITS112L: 'taken',
      ITS121L: 'taken',
      ITS131: 'taken',
      ITS131L: 'taken',
      NSTP300: 'taken',
  
      CSS130: 'inLoad',
      'FW04-1': 'inLoad',
      GED105: 'taken',
      GED110: 'taken',
      ITS150: 'inLoad',
      ITS150L: 'inLoad',
      ITS161L: 'taken',
      NSTP400: 'taken',
      
      // 2nd Year
      CSS123: 'notTaken',
      CSS123L: 'notTaken',
      CSS131: 'inLoad',
      CSS140: 'notTaken',
      ITS162L: 'taken',
      'MATH154-1': 'taken',
  
      CSS124: 'notTaken',
      CSS124L: 'notTaken',
      CSS145: 'notTaken',
      GED109: 'taken',
      ITS122: 'notTaken',
      ITS122L: 'notTaken',
      ITS163L: 'inLoad',
  
      GED106: 'taken',
      ITS132: 'notTaken',
      ITS132L: 'notTaken',
      ITS141: 'notTaken',
      ITS151: 'notTaken',
      ITS151L: 'notTaken',
      ITS164L: 'notTaken',
      ITS165: 'notTaken',
  
      GED107: 'taken',
      ITS142: 'notTaken',
      ITS142L: 'notTaken',
      ITS152: 'notTaken',
      ITS152L: 'notTaken',
      RZL110: 'taken',
  
      // 3rd Year
      ITS109: 'notTaken',
      ITS120: 'notTaken',
      ITS120L: 'notTaken',
      ITS153: 'notTaken',
      ITS153L: 'notTaken',
      ITS166: 'notTaken',
      ITS166L: 'notTaken',
  
      CSS153: 'notTaken',
      CSS153L: 'notTaken',
      ISS160: 'notTaken',
      ITS105: 'notTaken',
      'ITS200-1': 'notTaken',
      
      'ITS199-1R': 'notTaken',
      'ITS200-2': 'notTaken',
      
      ITS198F: 'preReq',
      'ITS199-2R': 'notTaken',
      'ITS200-3': 'notTaken',
      SGE100X: 'notTaken',
    },
		elective: {
      CSS171: 'notTaken',
      CSS172: 'notTaken',
      CSS173: 'notTaken',
      ECS176: 'notTaken',
      ISS170: 'notTaken',
      ISS171: 'notTaken',
      ISS172: 'notTaken',
      ISS173: 'notTaken',
      ISS174: 'notTaken',
      ITS170: 'notTaken',
      ITS171: 'notTaken',
      ITS172: 'notTaken',
      ITS173: 'notTaken',
      ITS174: 'notTaken',
      ITS175: 'notTaken',
    },
	},
	'Mark Artista': {
    core: {
      // 1st Year
      CSS121: 'taken',
      CSS121L: 'taken',
      'FW01-1': 'taken',
      GED101: 'taken',
      GED117: 'taken',
      ITS100: 'taken',
      NSTP100: 'taken',
  
      CSS122: 'taken',
      CSS122L: 'taken',
      'FW02-1': 'taken',
      GED103: 'taken',
      GED108: 'taken',
      ISS120: 'taken',
      ITS110L: 'taken',
      NSTP200: 'taken',
  
      'FW03-1': 'taken',
      GED102: 'taken',
      GED104: 'taken',
      ITS112: 'taken',
      ITS112L: 'taken',
      ITS121L: 'taken',
      ITS131: 'taken',
      ITS131L: 'taken',
      NSTP300: 'taken',
  
      CSS130: 'taken',
      'FW04-1': 'taken',
      GED105: 'taken',
      GED110: 'taken',
      ITS150: 'inLoad',
      ITS150L: 'inLoad',
      ITS161L: 'taken',
      NSTP400: 'taken',
      
      // 2nd Year
      CSS123: 'taken',
      CSS123L: 'taken',
      CSS131: 'taken',
      CSS140: 'taken',
      ITS162L: 'taken',
      'MATH154-1': 'taken',
  
      CSS124: 'taken',
      CSS124L: 'taken',
      CSS145: 'taken',
      GED109: 'taken',
      ITS122: 'taken',
      ITS122L: 'taken',
      ITS163L: 'inLoad',
  
      GED106: 'taken',
      ITS132: 'taken',
      ITS132L: 'taken',
      ITS141: 'taken',
      ITS151: 'taken',
      ITS151L: 'taken',
      ITS164L: 'notTaken',
      ITS165: 'taken',
  
      GED107: 'taken',
      ITS142: 'inLoad',
      ITS142L: 'inLoad',
      ITS152: 'inLoad',
      ITS152L: 'inLoad',
      RZL110: 'taken',
  
      // 3rd Year
      ITS109: 'notTaken',
      ITS120: 'notTaken',
      ITS120L: 'notTaken',
      ITS153: 'notTaken',
      ITS153L: 'notTaken',
      ITS166: 'notTaken',
      ITS166L: 'notTaken',
  
      CSS153: 'notTaken',
      CSS153L: 'notTaken',
      ISS160: 'notTaken',
      ITS105: 'notTaken',
      'ITS200-1': 'notTaken',
      
      'ITS199-1R': 'notTaken',
      'ITS200-2': 'notTaken',
      
      ITS198F: 'preReq',
      'ITS199-2R': 'notTaken',
      'ITS200-3': 'notTaken',
      SGE100X: 'notTaken',
    },
		elective: {
      CSS171: 'notTaken',
      CSS172: 'notTaken',
      CSS173: 'notTaken',
      ECS176: 'notTaken',
      ISS170: 'notTaken',
      ISS171: 'notTaken',
      ISS172: 'notTaken',
      ISS173: 'notTaken',
      ISS174: 'notTaken',
      ITS170: 'notTaken',
      ITS171: 'notTaken',
      ITS172: 'notTaken',
      ITS173: 'notTaken',
      ITS174: 'notTaken',
      ITS175: 'notTaken',
    },
	},
};
const studentInfo = {
  'Jose Victorino': {
    displayName: "Jose's",
    program: 'IT',
    defaultYear: 2,
    curriculumYear: 2022,
    specialization: 'Unassigned',
    unitsRequired: 171,
    defaultUnitsPassed: 13,
  },
  'Marion Clanza': {
    displayName: "Marion's",
    program: 'IT',
    defaultYear: 2,
    curriculumYear: 2022,
    specialization: 'Unassigned',
    unitsRequired: 171,
    defaultUnitsPassed: 13,
  },
  'Nikkos Dantes': {
    displayName: "Nikkos'",
    program: 'IT',
    defaultYear: 2,
    curriculumYear: 2022,
    specialization: 'Unassigned',
    unitsRequired: 171,
    defaultUnitsPassed: 16,
  },
  'Mark Artista': {
    displayName: "Mark's",
    program: 'IT',
    defaultYear: 2,
    curriculumYear: 2022,
    specialization: 'Unassigned',
    unitsRequired: 171,
    defaultUnitsPassed: 32,
  },
}

function generatecorecurriculum(core){
  const maxYear = () => {
    var year = 0;

    if(core)
      Object.keys(core).forEach((course) => {
        const courseInfo = core[course];
        if(year < courseInfo[0])
          year = courseInfo[0];
      });
    return year;
  }

  var content = '';

  for(year = 1; year <= 5; year++){
    content += `<div class="y${year}">`;
    if(year <= maxYear()){
      const maxTerm = (year) => {
        var term = 1;
    
        Object.keys(core).forEach((course) => {
          const courseInfo = core[course];
          if(year === courseInfo[0] && term < courseInfo[1])
            term = courseInfo[1];
        });
        return term;
      }

      for(term = 1; term <= maxTerm(year); term++){
        content +=
        `<p>Term ${term}</p>` +
        '<div class="table-cont">' +
          '<table>' + 
            '<thead>' +
              '<tr>' +
                '<th>Course Code</th>' +
                '<th>Course Title</th>' +
                '<th>Lec Hrs</th>' +
                '<th>Lab Hrs</th>' +
                '<th>Credit Units</th>' +
                '<th>Pre-Requisites</th>' +
                '<th>Co-Requisites</th>' +
                '<th>Paired Courses</th>' +
              '</tr>' +
            '</thead>' +
            '<tbody>';
        Object.keys(core).forEach((course) => {
          const courseInfo = core[course];

          if(courseInfo[0] === year && courseInfo[1] === term)
            content +=
              `<tr>` +
                `<td>${courseInfo[2]}</td>` +
                `<td>${courseInfo[3]}</td>` +
                `<td>${courseInfo[4]}</td>` +
                `<td>${courseInfo[5]}</td>` +
                `<td>${courseInfo[6]}</td>` +
                `<td>${courseInfo[7]}</td>` +
                `<td>${courseInfo[8]}</td>` +
                `<td>${courseInfo[9]}</td>` +
              '</tr>';
        });
        content += '</tbody></table></div>';
      }
    }
    else
      content += '<p class="no-course">There are no Core Courses in this year level.</p>';

    content += `</div>`;
  }

  return content;
}
function generateElectivesCurriculum(elec){
  var content = '';
	
  if(elec){
    content += 
    `<p>Year 3 Term 3</p>` +
    '<div class="table-cont">' +
    '<table>' + 
      '<thead>' +
        '<tr>' +
          '<th>Course Code</th>' +
          '<th>Course Title</th>' +
          '<th>Lec Hrs</th>' +
          '<th>Lab Hrs</th>' +
          '<th>Credit Units</th>' +
          '<th>Pre-Requisites</th>' +
          '<th>Co-Requisites</th>' +
          '<th>Paired Courses</th>' +
        '</tr>' +
      '</thead>' +
      '<tbody>';
    Object.keys(elec).forEach((course) => {
      const courseInfo = elec[course];

      content +=
        '<tr>' +
          `<td>${courseInfo[2]}</td>` +
          `<td>${courseInfo[3]}</td>` +
          `<td>${courseInfo[4]}</td>` +
          `<td>${courseInfo[5]}</td>` +
          `<td>${courseInfo[6]}</td>` +
          `<td>${courseInfo[7]}</td>` +
          `<td>${courseInfo[8]}</td>` +
          `<td>${courseInfo[9]}</td>` +
        '</tr>';
    });
    content += '</tbody></table></div>';
  }
  else
    content = '<p class="no-course">There are no Electives for this program.</p>';

  return content;
}

Object.keys(studentInfo).forEach((student, i) => {
  const currentStudent = studentInfo[student];
  const program = currentStudent.program;
  const curr = programCurriculum[program];
  const core = curr ? curr.core : null;
  const elective = curr ? curr.elective : null;

  if(currentStudent.defaultYear !== 3)
    courseStatus[student].core.SGE100X = 'preReq';

  document.querySelector('[data-mainNav]').innerHTML +=
  `<li class="nav-item" data-mainNavTab="student-${i + 1}" onclick="courseTabReset(); defaultYearReset();">` +
    `<p>${student}</p>` +
  `</li>`;
  document.querySelector('.student-currs').innerHTML +=
  `<section class="curr" data-mainTabWindow="student-${i + 1}">` +
    `<div class="gen-info">` +
      `<div class="student-name">` +
        `<h1>${currentStudent.displayName} Curriculum</h1>` +
        `<img src="./assets/image/svg/pen-to-square.svg" alt="edit" onclick="openEditModal('${student}', '${program}')">` +
      `</div>` +
      `<div class="infos">` +
        `<ul class="basic-info">` +
          `<li>` +
            `<p>Program: <b>${program}</b></p>` +
          `</li>` +
          `<li>` +
            `<p>Year Level: <b>${currentStudent.defaultYear}</b></p>` +
          `</li>` +
          `<li>` +
            `<p>Curriculum Year: <b>${currentStudent.curriculumYear}</b></p>` +
          `</li>` +
          `<li>` +
            `<p>Specialization: <b>${currentStudent.specialization}</b></p>` +
          `</li>` +
        `</ul>` +
        `<ul class="units">` +
          `<li>` +
            `<p>Required: <b>${currentStudent.unitsRequired}</b></p>` +
          `</li>` +
          `<li>` +
            `<p>Credited: <b data-unitsCredited></b></p>` +
          `</li>` +
          `<li>` +
            `<p>Passed: <b data-unitsPassed></b></p>` +
          `</li>` +
          `<li>` +
            `<p>Left: <b data-unitsLeft></b></p>` +
          `</li>` +
        `</ul>` +
      `</div>` +
    `</div>` +
    `<div class="main-curr">` +
      `<div class="tab-nav">` +
        `<ul>` +
          `<li class="selected" onclick="defaultYearReset()">` +
            `<p>Core Courses</p>` +
          `</li>` +
          `<li>` +
            `<p>Electives</p>` +
          `</li>` +
          `<li>` +
            `<p>Specialization</p>` +
          `</li>` +
        `</ul>` +
        `<div class="legend">` +
          `<p>Legend:</p>` +
          `<div>` +
            `<div class="inLoad"></div>` +
            `<p>in Load</p>` +
          `</div>` +
          `<div>` +
            `<div class="taken"></div>` +
            `<p>Taken</p>` +
          `</div>` +
          `<div>` +
            `<div class="notTaken"></div>` +
            `<p>Not Taken</p>` +
          `</div>` +
          `<div>` +
            `<div class="preReq"></div>` +
            `<p>Pre-requiset Needed</p>` +
          `</div>` +
        `</div>` +
      `</div>` +
      `<div class="curriculum-lists">` +
        `<article id="Core-Courses" class="show">` +
          `<div class="year-taken">` +
            `<p>Year</p>` +
            `<span class="selected">1st</span>` +
            `<span>2nd</span>` +
            `<span>3rd</span>` +
            `<span>4th</span>` +
            `<span>5th</span>` +
          `</div>` +
          `<div class="curr-tables">${generatecorecurriculum(core)}</div>` +
        `</article>` +
        `<article id="Electives">` +
          `<span>` +
            `<span>` +
              `<span>Required Units: </span><b>6</b>` +
            `</span>` +
            `<span>` +
              `<span>Units Passed: </span><b data-elecUnitsPassed></b>` +
            `</span>` +
            `<span>` +
              `<span>Units Left: </span><b data-elecUnitsLeft></b>` +
            `</span>` +
          `</span>` +
          generateElectivesCurriculum(elective) +
        `</article>` +
        `<article id="Specialization">` +
          `<p>Walang special sayo.</p>` +
        `</article>` +
      `</div>` +
    `</div>` +
  `</section>`;
});

// function getIntVal(val){
//   var newval = null;

//   if(typeof val === 'number')
//     newval = val;
//   return newval;
// }

// var itCurrTableSQL = "INSERT INTO `it curriculum` (`curriculumType`,`Year`, `Term`, `Course Code`, `Course Title`, `Lec Hrs`, `Lab Hrs`, `Credit Units`, `Pre-Requisites`, `Co-Requisites`, `Paired Courses`)\nVALUES\n";
// Object.keys(ITCurr).forEach((currType, i) => {
//   if(typeof ITCurr[currType] === 'object'){
//     Object.keys(ITCurr[currType]).forEach((course, j) => {
//       const info = ITCurr[currType][course];
      
//       itCurrTableSQL += `("${currType}", ${info[0]}, ${info[1]}, "${info[2]}", "${info[3]}", ${getIntVal(info[4])}, ${getIntVal(info[5])}, ${getIntVal(info[6])}, "${info[7]}", "${info[8]}", "${info[9]}")`;
//       itCurrTableSQL += (i === 1 && Object.keys(ITCurr[currType]).length === (j + 1)) ? ';' : ',\n';
//     });
//   }
// });
// console.log(itCurrTableSQL);

// var coreStatusTableSQL = "INSERT INTO `course status` (`name`, `curriculumType`, `Course Code`, `status`)\nVALUES\n";
// Object.keys(courseStatus).forEach((name) => {
//   const curriculumTypes = courseStatus[name];
//   Object.keys(curriculumTypes).forEach((curriculumType) => {
//     const courses = curriculumTypes[curriculumType]
//     Object.keys(courses).forEach((course) => {
//       if(name === 'Mark Artista')
//         coreStatusTableSQL += `("${name}", "${curriculumType}", "${course}", "${courses[course]}"),\n`;
//     })
//   });
// });
// console.log(coreStatusTableSQL);

// var studentInfoTableSQL = "INSERT INTO `students` (`name`, `displayName`, `program`, `defaultYear`, `curriculumYear`, `specialization`, `unitsRequired`, `defaultUnitsPassed`)\nVALUES\n";
// Object.keys(studentInfo).forEach((name, i) => {
//   studentInfoTableSQL += `("${name}", "${studentInfo[name].displayName}", "${studentInfo[name].program}", ${studentInfo[name].defaultYear}, ${studentInfo[name].curriculumYear}, "${studentInfo[name].specialization}", ${studentInfo[name].unitsRequired}, ${studentInfo[name].defaultUnitsPassed})`;
//   studentInfoTableSQL += (Object.keys(studentInfo).length === (i + 1)) ? ';' : ',\n';
// });
// console.log(studentInfoTableSQL);