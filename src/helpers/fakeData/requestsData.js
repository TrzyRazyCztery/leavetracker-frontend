import moment from "moment/moment";

export const requestTypes = {
  "1": {
    id: 1,
    type: "Sick Leave"
  },
  "2": {
    id: 2,
    type: "Vacation"
  },
  "3": {
    id: 3,
    type: "Home Office"
  },
  "4": {
    id: 4,
    type: "Other"
  },
  "5": {
    id: 5,
    type: "Training"
  }
};

export const requestStatuses = {
  "1": {
    id: 1,
    status: "Approved"
  },
  "2": {
    id: 2,
    status: "Declined"
  },
  "3": {
    id: 3,
    status: "Pending"
  }
};

export const requestsData = {
  "1": {
    id: 1,
    ownerId: 1,
    requestTypeId: 3,
    requestStatusId: 1,
    startDate: "2018-05-07",
    endDate: "2018-05-07",
    days: 1,
    info: "I need that"
  },
  "2": {
    id: 2,
    ownerId: 1,
    requestTypeId: 3,
    requestStatusId: 1,
    startDate: "2018-05-08",
    endDate: "2018-05-09",
    days: 2,
    info: ""
  },
  "3": {
    id: 3,
    ownerId: 2,
    requestTypeId: 1,
    requestStatusId: 2,
    startDate: "2018-05-08",
    endDate: "2018-05-08",
    days: 1,
    info: " fake description"
  },
  "4": {
    id: 4,
    ownerId: 3,
    requestTypeId: 2,
    requestStatusId: 2,
    startDate: "2018-05-08",
    endDate: "2018-05-08",
    days: 1,
    info: "Fake description"
  },
  "5": {
    id: 5,
    ownerId: 3,
    requestTypeId: 4,
    requestStatusId: 1,
    startDate: "2018-05-09",
    endDate: "2018-05-09",
    days: 1,
    info: "Fake description"
  },
  "6": {
    id: 6,
    ownerId: 3,
    requestTypeId: 5,
    requestStatusId: 1,
    startDate: "2018-05-10",
    endDate: "2018-05-11",
    days: 2,
    info: "Fake description"
  },
  "7": {
    id: 7,
    ownerId: 5,
    requestTypeId: 1,
    requestStatusId: 3,
    startDate: "2018-05-07",
    endDate: "2018-05-07",
    days: 1,
    info: "Fake description"
  },
  "8": {
    id: 8,
    ownerId: 5,
    requestTypeId: 2,
    requestStatusId: 3,
    startDate: "2018-05-09",
    endDate: "2018-05-09",
    days: 1,
    info: ""
  },
  "9": {
    id: 9,
    ownerId: 1,
    requestTypeId: 3,
    requestStatusId: 3,
    startDate: "2018-05-10",
    endDate: "2018-05-10",
    days: 1,
    info: ""
  },
  "10": {
    id: 10,
    ownerId: 2,
    requestTypeId: 5,
    requestStatusId: 3,
    startDate: "2018-05-10",
    endDate: "2018-05-10",
    days: 1,
    info:
      "I wan to visit my parents next week, i want to stay there for Monday too but im able to work from there. That is why i wat to take home office for this day"
  },
  "11": {
    id: 11,
    ownerId: 1,
    requestTypeId: 3,
    requestStatusId: 3,
    startDate: "2018-06-08",
    endDate: "2018-06-08",
    days: 1,
    info: "I need that"
  },
  "12": {
    id: 12,
    ownerId: 1,
    requestTypeId: 3,
    requestStatusId: 3,
    startDate: "2018-06-09",
    endDate: "2018-06-09",
    days: 1,
    info: "I need that"
  },
  "13": {
    id: 13,
    ownerId: 1,
    requestTypeId: 3,
    requestStatusId: 3,
    startDate: "2018-06-12",
    endDate: "2018-06-12",
    days: 1,
    info: "I need that"
  },
  "14": {
    id: 14,
    ownerId: 1,
    requestTypeId: 1,
    requestStatusId: 1,
    startDate: "2018-02-05",
    endDate: "2018-02-09",
    days: 5,
    info:
      "I wan to visit my parents next week, i want to stay there for Monday too but im able to work from there. That is why i wat to take home office for this day"
  },
  "20": {
    id: 20,
    ownerId: 1,
    requestTypeId: 2,
    requestStatusId: 1,
    startDate: "2018-03-13",
    endDate: "2018-03-14",
    days: 2,
    info: "I need that"
  },
  "15": {
    id: 15,
    ownerId: 1,
    requestTypeId: 3,
    requestStatusId: 1,
    startDate: "2018-04-18",
    endDate: "2018-04-20",
    days: 2,
    info: "I need that"
  },
  "16": {
    id: 16,
    ownerId: 1,
    requestTypeId: 4,
    requestStatusId: 1,
    startDate: "2018-04-24",
    endDate: "2018-04-24",
    days: 1,
    info: "I need that"
  },
  "17": {
    id: 17,
    ownerId: 1,
    requestTypeId: 5,
    requestStatusId: 1,
    startDate: "2018-02-22",
    endDate: "2018-02-23",
    days: 2,
    info: "I need that"
  },
  "18": {
    id: 18,
    ownerId: 1,
    requestTypeId: 5,
    requestStatusId: 1,
    startDate: "2018-03-05",
    endDate: "2018-03-05",
    days: 1,
    info: "I need that"
  },
  "19": {
    id: 19,
    ownerId: 1,
    requestTypeId: 5,
    requestStatusId: 1,
    startDate: "2018-01-15",
    endDate: "2018-01-16",
    days: 2,
    info: "I need that"
  },
  "21": {
    id: 21,
    ownerId: 1,
    requestTypeId: 3,
    requestStatusId: 1,
    startDate: "2018-01-18",
    endDate: "2018-01-18",
    days: 1,
    info: "I need that"
  },
  "22": {
    id: 22,
    ownerId: 1,
    requestTypeId: 3,
    requestStatusId: 1,
    startDate: "2018-02-19",
    endDate: "2018-02-19",
    days: 1,
    info: "I need that"
  },
  "23": {
    id: 23,
    ownerId: 1,
    requestTypeId: 3,
    requestStatusId: 3,
    startDate: "2018-03-09",
    endDate: "2018-03-09",
    days: 1,
    info: "I need that"
  },
  "24": {
    id: 24,
    ownerId: 1,
    requestTypeId: 3,
    requestStatusId: 3,
    startDate: "2018-03-23",
    endDate: "2018-03-23",
    days: 1,
    info: "I have doctor appointment near to my house"
  }
};
