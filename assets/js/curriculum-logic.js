const stdCurrs = Array.from(document.querySelector('.student-currs').children);
const ITCurriculum = [
  [
    {
      T1:
      {
        CSS121: [1, 1, 'CSS121', 'COMPUTER PROGRAMMING 1', 3, '-', 2, '', '', ''],
        CSS121L: ['', '', 'CSS121L', 'COMPUTER PROGRAMMING LABORATORY 1', '-', 4.5, 1, '', 'CSS121', ''],
        'FW01-1': ['', '', 'FW01-1', 'PHYSICAL ACTIVITIES TOWARD HEALTH AND FITNESS 1 (PATHFIT 1): MOVEMENT COMPETENCY TRAINING', 3, '-', 2, '', '', ''],
        GED101: ['', '', 'GED101', 'UNDERSTANDING THE SELF', 4.5, '-', 3, '', '', ''],
        GED117: ['', '', 'GED117', 'GREAT BOOKS', 4.5, '-', 3, '', '', ''],
        ITS100: ['', '', 'ITS100', 'INTRODUCTION TO INFORMATION TECHNOLOGY', 4.5, '-', 3, '', '', ''],
        NSTP100: ['', '', 'NSTP100', 'NATIONAL SERVICE TRAINING PROGRAM 1', '-', 4.5, 1.5, '', '', ''],
      },
      T2:
      {
        CSS122: [1, 2, 'CSS122', 'COMPUTER PROGRAMMING 2', 3, '-', 2, 'CSS121, CSS121L', '', ''],
        CSS122L: ['', '', 'CSS122L', 'COMPUTER PROGRAMMING LABORATORY 2', '-', 4.5, 1, 'CSS121, CSS121L', 'CSS122', ''],
        'FW02-1': ['', '', 'FW02-1', 'PHYSICAL ACTIVITIES TOWARD HEALTH AND FITNESS 2 (PATHFIT 2): EXERCISE-BASED FITNESS ACTIVITIES', 3, '-', 2, 'FW01-1', '', ''],
        GED103: ['', '', 'GED103', 'READINGS IN PHILIPPINE HISTORY', 4.5, '-', 3, '', '', ''],
        GED108: ['', '', 'GED108', 'ART APPRECIATION', 4.5, '-', 3, '', '', ''],
        ISS120: ['', '', 'ISS120', 'INFORMATION SYSTEMS AND BUSINESS PROCESSES', 4.5, '-', 3, 'ITS100', '', ''],
        ITS110L: ['', '', 'ITS110L', 'COMPUTER HARDWARE AND TROUBLESHOOTING', '-', 4.5, 1, '', '', ''],
        NSTP200: ['', '', 'NSTP200', 'NATIONAL SERVICE TRAINING PROGRAM 2', '-', 4.5, 1.5, 'NSTP100', '', ''],
      },
      T3:
      {
        'FW03-1': [1, 3, 'FW03-1', 'PHYSICAL ACTIVITIES TOWARD HEALTH AND FITNESS 3 (PATHFIT 3): DANCE / MARTIAL ARTS', 3, '-', 2, 'FW01-1, FW01-2', '', ''],
        GED102: ['', '', 'GED102', 'MATHEMATICS IN THE MODERN WORLD', 4.5, '-', 3, '', '', ''],
        GED104: ['', '', 'GED104', 'SCIENCE, TECHNOLOGY AND SOCIETY', 4.5, '-', 3, '', '', ''],
        ITS112: ['', '', 'ITS112', 'COMPUTER ARCHITECTURE AND ORGANIZATION', 3, '-', 2, 'CSS121, CSS121L', '', ''],
        ITS112L: ['', '', 'ITS112L', 'COMPUTER ARCHITECTURE AND ORGANIZATION LABORATORY', '-', 4.5, 1, 'CSS121, CSS121L', 'ITS112', ''],
        ITS121L: ['', '', 'ITS121L', 'WEB SYSTEMS AND TECHNOLOGIES 1 LABORATORY', '-', 4.5, 1, 'CSS121, CSS121L', '', ''],
        ITS131: ['', '', 'ITS131', 'INFORMATION MANAGEMENT', 3, '-', 2, 'CSS121, CSS121L', '', ''],
        ITS131L: ['', '', 'ITS131L', 'INFORMATION MANAGEMENT LABORATORY', '-', 4.5, 1, 'CSS121, CSS121L', 'ITS131', ''],
        NSTP300: ['', '', 'NSTP300', 'NATIONAL SERVICE TRAINING PROGRAM 3', '-', 4.5, 1.5, 'NSTP200', '', ''],
      },
      T4:
      {
        CSS130: [1, 4, 'CSS130', 'DATA STRUCTURES AND ALGORITHMS', 4.5, '-', 3, 'CSS122, CSS122L', '', ''],
        'FW04-1': ['', '', 'FW04-1', 'PHYSICAL ACTIVITIES TOWARD HEALTH AND FITNESS 4 (PATHFIT 4): GROUP EXERCISE', 3, '-', 2, 'FW01-1, FW02-1, FW03-1', '', ''],
        GED105: ['', '', 'GED105', 'THE CONTEMPORARY WORLD', 4.5, '-', 3, '', '', ''],
        GED110: ['', '', 'GED110', 'PEOPLE AND EARTH S ECOSYSTEM', 4.5, '-', 3, '', '', ''],
        ITS150: ['', '', 'ITS150', 'OPERATING SYSTEMS', 3, '-', 2, 'ITS121, ITS121L', '', ''],
        ITS150L: ['', '', 'ITS150L', 'OPERATING SYSTEMS LABORATORY', '-', 4.5, 1, 'ITS121, ITS121L', 'ITS150', ''],
        ITS161L: ['', '', 'ITS161L', 'FUNDAMENTALS OF COMPUTER NETWORK 1', '-', 4.5, 1, 'CSS121, CSS121L', '', ''],
        NSTP400: ['', '', 'NSTP400', 'NATIONAL SERVICE TRAINING PROGRAM 4', '-', 4.5, 1.5, 'NSTP300', '', ''],
      },
    },
    {
      T1:
      {
        CSS123: [2, 1, 'CSS123', 'OBJECT-ORIENTED PROGRAMMING', 3, '-', 2, 'ITS131, ITS131L', '', ''],
        CSS123L: ['', '', 'CSS123L', 'OBJECT-ORIENTED PROGRAMMING LABORATORY', '-', 4.5, 1, 'ITS131, ITS131L', 'CSS123', ''],
        CSS131: ['', '', 'CSS131', 'DISCRETE MATHEMATICS 1', 4.5, '-', 3, 'CSS121, CSS121L', '', ''],
        CSS140: ['', '', 'CSS140', 'ARTIFICIAL INTELLIGENCE', 4.5, '-', 3, 'CSS130', '', ''],
        ITS162L: ['', '', 'ITS162L', 'FUNDAMENTALS OF COMPUTER NETWORK 2', '-', 9, 2, 'ITS161L', '', ''],
        'MATH154-1': ['', '', 'MATH154-1', 'QUANTITATIVE METHODS', 4.5, '-', 3, '', '', ''],
      },
      T2:
      {
        CSS124: [2, 2, 'CSS124', 'EVENT-DRIVEN/GUI PROGRAMMING', 3, '-', 2, 'CSS123, CSS123L', '', ''],
        CSS124L: ['', '', 'CSS124L', 'EVENT-DRIVEN/GUI PROGRAMMING LABORATORY', '-', 4.5, 1, 'CSS123, CSS123L', 'CSS124', ''],
        CSS145: ['', '', 'CSS145', 'INTRODUCTION TO DATA SCIENCE', 4.5, '-', 3, 'ITS131, ITS131L', '', ''],
        GED109: ['', '', 'GED109', 'GENDER AND SOCIETY', 4.5, '-', 3, '', '', ''],
        ITS122: ['', '', 'ITS122', 'WEB SYSTEMS AND TECHNOLOGIES 2', 3, '-', 2, 'ITS121L, ITS131, ITS131L', '', ''],
        ITS122L: ['', '', 'ITS122L', 'WEB SYSTEMS AND TECHNOLOGIES 2 LABORATORY', '-', 4.5, 1, 'ITS121L, ITS131, ITS131L', 'ITS122', ''],
        ITS163L: ['', '', 'ITS163L', 'ADVANCED COMPUTER NETWORK 1', '-', 9, 2, 'ITS162L', '', ''],
      },
      T3:
      {
        GED106: [2, 3, 'GED106', 'PURPOSIVE COMMUNICATION', 4.5, '-', 3, '', '', ''],
        ITS132: ['', '', 'ITS132', 'DATA WAREHOUSING AND DATA MINING', 3, '-', 2, 'CSS145, ITS131, ITS131L', '', ''],
        ITS132L: ['', '', 'ITS132L', 'DATA WAREHOUSING AND DATA MINING LABORATORY', '-', 4.5, 1, 'CSS145, ITS131, ITS131L', 'ITS132', ''],
        ITS141: ['', '', 'ITS141', 'HUMAN-COMPUTER INTERACTION 1', 4.5, '-', 3, 'CSS124, CSS124L', '', ''],
        ITS151: ['', '', 'ITS151', 'SYSTEMS INTEGRATION AND ARCHITECTURE 1', 3, '-', 2, 'CSS124, CSS124L, ISS120', '', ''],
        ITS151L: ['', '', 'ITS151L', 'SYSTEMS INTEGRATION AND ARCHITECTURE 1 LABORATORY', '-', 4.5, 1, 'CSS124, CSS124L, ISS120', 'ITS151', ''],
        ITS164L: ['', '', 'ITS164L', 'ADVANCED COMPUTER NETWORK 2', '-', 4.5, 1, 'ITS163L', '', ''],
        ITS165: ['', '', 'ITS165', 'INFORMATION ASSURANCE AND SECURITY 1', 4.5, '-', 3, 'ITS131, ITS131L, ITS161L', '', ''],
      },
      T4:
      {
        GED107: [2, 4, 'GED107', 'ETHICS', 4.5, '-', 3, '', '', ''],
        ITS142: ['', '', 'ITS142', 'HUMAN-COMPUTER INTERACTION 2', 3, '-', 2, 'ITS141', '', ''],
        ITS142L: ['', '', 'ITS142L', 'HUMAN-COMPUTER INTERACTION 2 LABORATORY', '-', 4.5, 1, 'ITS141', 'ITS142', ''],
        ITS152: ['', '', 'ITS152', 'SYSTEMS INTEGRATION AND ARCHITECTURE 2', 3, '-', 2, 'ITS151, ITS151L', '', ''],
        ITS152L: ['', '', 'ITS152L', 'SYSTEMS INTEGRATION AND ARCHITECTURE 2 LABORATORY', '-', 4.5, 1, 'ITS151, ITS151L', 'ITS152', ''],
        RZL110: ['', '', 'RZL110', 'THE LIFE AND WORKS OF RIZAL', 4.5, '-', 3, '', '', ''],
      },
    },
    {
      T1:
      {
        ITS109: [3, 1, 'ITS109', 'RESEARCH METHODS IN INFORMATION TECHNOLOGY', 4.5, '-', 3, 'ITS152, ITS152L', '', ''],
        ITS120: ['', '', 'ITS120', 'APPLICATION DEVELOPMENT AND EMERGING TECHNOLOGIES', 3, '-', 2, 'CSS124, CSS124L', '', ''],
        ITS120L: ['', '', 'ITS120L', 'APPLICATION DEVELOPMENT AND EMERGING TECHNOLOGIES LABORATORY', '-', 4.5, 1, 'CSS124, CSS124L', '', ''],
        ITS153: ['', '', 'ITS153', 'SYSTEMS ADMINISTRATION AND MAINTENANCE', 3, '-', 2, 'ITS152, ITS152L, ITS164L', '', ''],
        ITS153L: ['', '', 'ITS153L', 'SYSTEMS ADMINISTRATION AND MAINTENANCE LABORATORY', '-', 4.5, 1, 'ITS152, ITS152L, ITS164L', 'ITS153', ''],
        ITS166: ['', '', 'ITS166', 'INFORMATION SECURITY AND ASSURANCE 2', 3, '-', 2, 'ITS165', '', ''],
        ITS166L: ['', '', 'ITS166L', 'INFORMATION SECURITY AND ASSURANCE 2 LABORATORY', '-', 4.5, 1, 'ITS165', 'ITS166', ''],
      },
      T2:
      {
        CSS153: [3, 2, 'CSS153', 'SOFTWARE QUALITY', 3, '-', 2, 'ITS142, ITS142L', '', ''],
        CSS153L: ['', '', 'CSS153L', 'SOFTWARE QUALITY LABORATORY', '-', 4.5, 1, 'ITS142, ITS142L', 'CSS153', ''],
        ISS160: ['', '', 'ISS160', 'PROJECT MANAGEMENT', 4.5, '-', 3, 'CSS124, CSS124L', '', ''],
        ITS105: ['', '', 'ITS105', 'SOCIAL AND PROFESSIONAL ISSUES', 4.5, '-', 3, 'GED107, ITS141', '', ''],
        'ITS200-1': ['', '', 'ITS200-1', 'THESIS 1', 1.5, '-', 1, 'ITS109', '', ''],
      },
      T3:
      {
        'ITS199-1R': [3, 3, 'ITS199-1R', 'PRACTICUM 1', 4.5, '-', 3, 'ITS105', '', ''],
        'ITS200-2': ['', '', 'ITS200-2', 'THESIS 2', 4.5, '-', 1, 'ITS200-1', '', ''],
      },
      T4:
      {
        ITS198F: [3, 4, 'ITS198F', 'CAREER DEVELOPMENT AND SEMINAR IN IT', '-', 4.5, 1, 'FOR GRADUATING STUDENTS ONLY', '', ''],
        'ITS199-2R': ['', '', 'ITS199-2R', 'PRACTICUM 2', 4.5, '-', 3, 'ITS199-1R', '', ''],
        'ITS200-3': ['', '', 'ITS200-3', 'THESIS 3', 4.5, '-', 1, 'ITS200-2', '', ''],
        SGE100X: ['', '', 'SGE100X', 'STUDENT GLOBAL EXPERIENCE', '-', '-', '(0)', '3RD YEAR STANDING', '', ''],
      },
    },
  ],
  [
    {
      CSS171: ['3', '3', 'CSS171', 'GRAPHICS AND VISUAL COMPUTING', 4.5, '-', 3, 'CSS124, CSS124L', '', ''],
      CSS172: ['3', '3', 'CSS172', 'PATTERN RECOGNITION', 4.5, '-', 3, 'CSS124, CSS124L', '', ''],
      CSS173: ['3', '3', 'CSS173', 'PARALLEL AND DISTRIBUTED COMPUTING', 4.5, '-', 3, 'CSS124, CSS124L', '', ''],
      ECS176: ['3', '3', 'ECS176', 'INTRODUCTION TO GAME PROGRAMMING', 4.5, '-', 3, 'CSS124, CSS124L', '', ''],
      ISS170: ['3', '3', 'ISS170', 'TECHNOPRENEURSHIP', 4.5, '-', 3, 'ITS132, ITS132L', '', ''],
      ISS171: ['3', '3', 'ISS171', 'SUPPLY CHAIN MANAGEMENT', 4.5, '-', 3, 'ITS131, ITS131L', '', ''],
      ISS172: ['3', '3', 'ISS172', 'CUSTOMER RELATIONS MANAGEMENT', 4.5, '-', 3, 'ITS131, ITS131L', '', ''],
      ISS173: ['3', '3', 'ISS173', 'ESSENTIAL OF SAS', 4.5, '-', 3, 'MATH154-1', '', ''],
      ISS174: ['3', '3', 'ISS174', 'IT AUDIT AND CONTROL', 4.5, '-', 3, 'ITS131, ITS131L', '', ''],
      ITS170: ['3', '3', 'ITS170', 'IT INFRASTRUCTURE LIBRARY FOUNDATION COURSE', 4.5, '-', 3, 'ITS131, ITS131L', '', ''],
      ITS171: ['3', '3', 'ITS171', 'FUNDAMENTALS OF SAP', 4.5, '-', 3, 'ITS131, ITS131L', '', ''],
      ITS172: ['3', '3', 'ITS172', 'MOBILE APPLICATION DEVELOPMENT', 4.5, '-', 3, 'CSS124, CSS124L', '', ''],
      ITS173: ['3', '3', 'ITS173', 'EMBEDDED SYSTEMS', 4.5, '-', 3, 'CSS124, CSS124L', '', ''],
      ITS174: ['3', '3', 'ITS174', 'INTERNET OF THINGS', 4.5, '-', 3, 'CSS124, CSS124L', '', ''],
      ITS175: ['3', '3', 'ITS175', 'CLOUD COMPUTING', 4.5, '-', 3, 'CSS124, CSS124L', '', ''],
    },
  ]
];
const courseStatus = [
	// Jose Victorino
	{
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
		'FW04-1': 'notTaken',
		GED105: 'taken',
		GED110: 'notTaken',
		ITS150: 'notTaken',
		ITS150L: 'notTaken',
		ITS161L: 'notTaken',
		NSTP400: 'taken',
		
		// 2nd Year
		CSS123: 'taken',
		CSS123L: 'taken',
		CSS131: 'notTaken',
		CSS140: 'notTaken',
		ITS162L: 'notTaken',
		'MATH154-1': 'notTaken',

		CSS124: 'taken',
		CSS124L: 'taken',
		CSS145: 'taken',
		GED109: 'notTaken',
		ITS122: 'notTaken',
		ITS122L: 'notTaken',
		ITS163L: 'notTaken',

		GED106: 'notTaken',
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
		RZL110: 'notTaken',

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

		// Electives
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
	// Marion Clanza
	{
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
		GED110: 'notTaken',
		ITS150: 'notTaken',
		ITS150L: 'notTaken',
		ITS161L: 'taken',
		NSTP400: 'notTaken',
		
		// 2nd Year
		CSS123: 'taken',
		CSS123L: 'taken',
		CSS131: 'notTaken',
		CSS140: 'taken',
		ITS162L: 'notTaken',
		'MATH154-1': 'notTaken',

		CSS124: 'notTaken',
		CSS124L: 'notTaken',
		CSS145: 'taken',
		GED109: 'notTaken',
		ITS122: 'notTaken',
		ITS122L: 'notTaken',
		ITS163L: 'notTaken',

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

		// Electives
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
	// Nikkos Dantes
	{
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
		ITS131: 'notTaken',
		ITS131L: 'notTaken',
		NSTP300: 'taken',

		CSS130: 'notTaken',
		'FW04-1': 'notTaken',
		GED105: 'taken',
		GED110: 'taken',
		ITS150: 'notTaken',
		ITS150L: 'notTaken',
		ITS161L: 'taken',
		NSTP400: 'taken',
		
		// 2nd Year
		CSS123: 'notTaken',
		CSS123L: 'notTaken',
		CSS131: 'notTaken',
		CSS140: 'notTaken',
		ITS162L: 'notTaken',
		'MATH154-1': 'taken',

		CSS124: 'notTaken',
		CSS124L: 'notTaken',
		CSS145: 'notTaken',
		GED109: 'taken',
		ITS122: 'notTaken',
		ITS122L: 'notTaken',
		ITS163L: 'notTaken',

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

		// Electives
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
	// 
	{
		// 1st Year
		CSS121: 'notTaken',
		CSS121L: 'notTaken',
		'FW01-1': 'notTaken',
		GED101: 'notTaken',
		GED117: 'notTaken',
		ITS100: 'notTaken',
		NSTP100: 'notTaken',

		CSS122: 'notTaken',
		CSS122L: 'notTaken',
		'FW02-1': 'notTaken',
		GED103: 'notTaken',
		GED108: 'notTaken',
		ISS120: 'notTaken',
		ITS110L: 'notTaken',
		NSTP200: 'notTaken',

		'FW03-1': 'notTaken',
		GED102: 'notTaken',
		GED104: 'notTaken',
		ITS112: 'notTaken',
		ITS112L: 'notTaken',
		ITS121L: 'notTaken',
		ITS131: 'notTaken',
		ITS131L: 'notTaken',
		NSTP300: 'notTaken',

		CSS130: 'notTaken',
		'FW04-1': 'notTaken',
		GED105: 'notTaken',
		GED110: 'notTaken',
		ITS150: 'notTaken',
		ITS150L: 'notTaken',
		ITS161L: 'notTaken',
		NSTP400: 'notTaken',
		
		// 2nd Year
		CSS123: 'notTaken',
		CSS123L: 'notTaken',
		CSS131: 'notTaken',
		CSS140: 'notTaken',
		ITS162L: 'notTaken',
		'MATH154-1': 'notTaken',

		CSS124: 'notTaken',
		CSS124L: 'notTaken',
		CSS145: 'notTaken',
		GED109: 'notTaken',
		ITS122: 'notTaken',
		ITS122L: 'notTaken',
		ITS163L: 'notTaken',

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
		RZL110: 'notTaken',

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

		// Electives
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
];
stdCurrs.forEach((student, i) => {
  const program = student.querySelector('[data-program]');
  const coreTableCont = student.querySelector('.curr-tables');
  const elecTableCont = student.querySelector('#Electives');

  // Curriculum Generation
  if(program.innerHTML === 'IT') 
		generateCurriculum(ITCurriculum, coreTableCont, elecTableCont);

  // Course Prereq Changes & Info Computation
	const unitsPassed = student.querySelector('[data-unitsPassed]');
  var unitsCorePassed = cStatus(coreTableCont);
  var unitsElecPassed = cStatus(elecTableCont);
	
	unitsPassed.innerText = Number(unitsPassed.innerText) + unitsCorePassed;
	student.querySelector('[data-unitsCredited]').innerText = unitsCorePassed;
  student.querySelector('[data-unitsLeft]').innerText = Number(student.querySelector('[data-unitsRequired]').innerText) - unitsCorePassed;
  student.querySelector('[data-elecUnitsPassed]').innerText = unitsElecPassed;
  student.querySelector('[data-elecUnitsLeft]').innerText = (unitsElecPassed > 6) ? 0 : 6 - unitsElecPassed;

  function generateCurriculum(curriculum, coreCont, elecCont){
    if(curriculum[0])
      for(let year = 0; year < 5; year++){
        let content = `<div class="y${year + 1}">`;
  
        if(curriculum[0][year]){
          Object.keys(curriculum[0][year]).forEach((term) => {
            let totalLecHrs = 0;
            let totalLabHrs = 0;
            let totalUnits = 0;
          
            content += '<div class="table-cont"><table>' + 
            '<thead>' +
              '<tr>' +
                '<th>Yr</th>' +
                '<th>Term</th>' +
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
  
            Object.keys(curriculum[0][year][term]).forEach((course) => {
              if(!(curriculum[0][year][term][course][4] == '-'))
                totalLecHrs += curriculum[0][year][term][course][4];
              if(!(curriculum[0][year][term][course][5] == '-'))
                totalLabHrs += curriculum[0][year][term][course][5];
              if(!(curriculum[0][year][term][course][6] == '-'))
                totalUnits += curriculum[0][year][term][course][6];
  
              content +=
              '<tr>' +
                `<td>${curriculum[0][year][term][course][0]}</td>` +
                `<td>${curriculum[0][year][term][course][1]}</td>` +
                `<td style="text-align: left;" data-courseCode>${curriculum[0][year][term][course][2]}</td>` +
                `<td style="text-align: left;" data-courseName>${curriculum[0][year][term][course][3]}</td>` +
                `<td>${curriculum[0][year][term][course][4]}</td>` +
                `<td>${curriculum[0][year][term][course][5]}</td>` +
                `<td data-courseUnits>${curriculum[0][year][term][course][6]}</td>` +
                `<td style="text-align: left;" data-coursePreReq>${curriculum[0][year][term][course][7]}</td>` +
                `<td style="text-align: left;">${curriculum[0][year][term][course][8]}</td>` +
                `<td style="text-align: left;">${curriculum[0][year][term][course][9]}</td>` +
              '</tr>';
            });
            content +=
              '<tr>' +
                '<td></td>' +
                '<td></td>' +
                '<td></td>' +
                '<td>total</td>' +
                `<td>${totalLecHrs}</td>` +
                `<td>${totalLabHrs}</td>` +
                `<td>${totalUnits}</td>` +
                '<td></td>' +
                '<td></td>' +
                '<td></td>' +
              '</tr>' + 
              '</tbody></table></div>';
          });
        }
        else
          content += '<p class="no-course">There are no Core Courses in this year level.</p>';
  
        content += '</div>';
        coreCont.innerHTML += content;
      }
    else
      console.log('no core');
  
    if(curriculum[1]){
      let totalLecHrs = 0;
      let totalLabHrs = 0;
      let totalUnits = 0;
      let content = '<div class="table-cont"><table>' + 
        '<thead>' +
          '<tr>' +
            '<th>Yr</th>' +
            '<th>Term</th>' +
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
      
      Object.keys(curriculum[1][0]).forEach((course) => {
        if(!(curriculum[1][0][course][4] == '-'))
          totalLecHrs += curriculum[1][0][course][4];
        if(!(curriculum[1][0][course][5] == '-'))
          totalLabHrs += curriculum[1][0][course][5];
        if(!(curriculum[1][0][course][6] == '-'))
          totalUnits += curriculum[1][0][course][6];
  
        content +=
          '<tr>' +
            `<td>${curriculum[1][0][course][0]}</td>` +
            `<td>${curriculum[1][0][course][1]}</td>` +
            `<td style="text-align: left;" data-courseCode>${curriculum[1][0][course][2]}</td>` +
            `<td style="text-align: left;" data-courseName>${curriculum[1][0][course][3]}</td>` +
            `<td>${curriculum[1][0][course][4]}</td>` +
            `<td>${curriculum[1][0][course][5]}</td>` +
            `<td data-courseUnits>${curriculum[1][0][course][6]}</td>` +
            `<td style="text-align: left;" data-coursePreReq>${curriculum[1][0][course][7]}</td>` +
            `<td style="text-align: left;">${curriculum[1][0][course][8]}</td>` +
            `<td style="text-align: left;">${curriculum[1][0][course][9]}</td>` +
          '</tr>';
      });
      content +=
        '<tr>' +
          '<td></td>' +
          '<td></td>' +
          '<td></td>' +
          '<td>total</td>' +
          `<td>${totalLecHrs}</td>` +
          `<td>${totalLabHrs}</td>` +
          `<td>${totalUnits}</td>` +
          '<td></td>' +
          '<td></td>' +
          '<td></td>' +
        '</tr>';
  
        content += '</tbody></table></div>';
        elecCont.innerHTML += content;
    }
    else
      console.log('no elec');
  }
  function cStatus(tableCont){
    const tr = tableCont.querySelectorAll('table tbody tr:not(:last-child)');
    var hasTaken = 0;
    tr.forEach((row) => {
      const coursePreReqs = row.querySelector('[data-coursePreReq]').innerText.split(', ');
      const cCode = row.querySelector('[data-courseCode]').innerText;
      var taken = false;
  
      if(!(courseStatus[i] && cCode in courseStatus[i])) return;
      if(coursePreReqs === '') return;
      
      coursePreReqs.forEach((preReq) => {
        if(courseStatus[i] && preReq in courseStatus[i])
          if(courseStatus[i][preReq] !== 'taken')
            taken = true;
      });
  
      if(taken)
        courseStatus[i][cCode] = 'preReq';
      if(stdCurrs[i].querySelector('[data-defaultYear]').innerHTML !== 3)
        courseStatus[i].SGE100X = 'preReq';
  
      row.classList.add(courseStatus[i][cCode]);
		
			if(courseStatus[i][cCode] === 'taken')
				hasTaken += Number(row.querySelector('[data-courseUnits]').innerText);
    });
		return hasTaken;
  }
});

const students = document.querySelectorAll('[data-student]');
const allMutualCourses = [];
var allCombinations = [];

for(let j = 1; j < Math.pow(2, students.length); j++){
	const combination = [];

	for(let k = 0; k < students.length; k++)
		if((j & (1 << k)) !== 0)
			combination.push(k);
	if(combination.length > 1){
    const mutualCourses = [];
  
    combination.forEach((student) => {
      const notTakenCourses = [];
  
      Object.keys(courseStatus[student]).forEach((course) => {
        if(courseStatus[student][course] === 'notTaken')
          notTakenCourses.push(course);
      });
  
      mutualCourses.push(notTakenCourses);
    });
  
    const commonCourses = mutualCourses.reduce((array, currentCourses) => {
      return array.filter(course => currentCourses.includes(course));
    });
    
    if(commonCourses.length > 0){
      allMutualCourses.push(commonCourses);
      allCombinations.push(combination);
    }
  }
}

if(allMutualCourses == 0)
	document.querySelector('.mutual-courses p').style.display = 'block';

allMutualCourses.forEach((mutualCourses, i) => {
	const names = [];

	for(let j = 0; j < allCombinations[i].length; j++)
		names.push(students[allCombinations[i][j]].innerText);

	var content = 
	'<li>' +
		'<div><span>' + names.join(', ') + '</span></div>' +
		'<hr>' +
		'<table>' +
			'<thead>' +
				'<tr>' +
					'<th>Course Code</th>' +
					'<th>Course Title</th>' +
				'</tr>' +
			'</thead>' +
			'<tbody>';

	mutualCourses.forEach((mutualCourse, j) => {
    let courseTitle = '';

    for(let year = 0; year < 5; year++)
      if(ITCurriculum[0][year])
        Object.keys(ITCurriculum[0][year]).forEach((term) => {
          Object.keys(ITCurriculum[0][year][term]).forEach((course) => {
            if(ITCurriculum[0][year][term][course][2] == mutualCourse)
              courseTitle = ITCurriculum[0][year][term][course][3];
          });
        });
    Object.keys(ITCurriculum[1][0]).forEach((course) => {
			if(ITCurriculum[1][0][course][2] == mutualCourse)
				courseTitle = ITCurriculum[1][0][course][3];
		});
    
		if(j % 2 == 0)
			content +=
			'<tr class="even">' +
        '<td>' + mutualCourse + '</td>' +
        '<td>' + courseTitle + '</td>' +
			'<tr>';
		else
			content +=
			'<tr class="odd">' +
				'<td>' + mutualCourse + '</td>' +
				'<td>' + courseTitle + '</td>' +
			'<tr>';
	});

  content += '</tbody></table></li>';
  document.querySelector('[data-mutualStudentCourses]').innerHTML += content;
});
// 869