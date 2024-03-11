


//1.Find all the topics and tasks which are thought in the month of October

db.topics.find({ date: { $gte: ISODate("2020-10-01"), $lte: ISODate("2020-10-31") } }).pretty()


// 2.Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

db.company_drives.find({ date: { $gte: ISODate("2020-10-15"), $lte: ISODate("2020-10-31") } }).pretty()



//3.Find all the company drives and students who are appeared for the placement.

db.company_drives.find({ "attended": "true" }).pretty()


//4.Find the number of problems solved by the user in codekata

db.codekata.count({ solution: { $exists: true } })



//5.Find all the mentors with who has the mentee's count more than 15

db.mentors.find({ mentee_count: { $gt: 15 } })



//6.Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

6.
db.tasks.aggregate([{
  $match: {
    "submissiondate": {
      $gte: new Date("2020-10-15"),
      $lte: new Date("2020-10-31")
    }, "submittedusers.submission": "false"
  }
}, {
  $group:
    { _id: null, count: { $sum: 1 } }
}]),
{
  "_id": null,
  "count": 3
};


