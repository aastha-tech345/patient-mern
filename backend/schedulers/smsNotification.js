const schedule = require("node-schedule");
const Patients = require("../models/patiend.model");
const SmsLog = require("../models/smslog.model");

//  scheduler is working

// schedule.scheduleJob("*/90 * * * * *", async function () {
//   const patientsWithDoctorNotification = await Patients.find()
//     .populate({
//       path: "doctor_id",
//       match: { patientNotification: true }, // Filter doctors by patientNotification:true
//     })
//     .exec();

// /////////this code is searching as expected
// async function run() {
//   const todayDate = new Date();
//   // Extracting only the date part and converting to UTC format
//   const todayDateString = todayDate.toISOString().split("T")[0];

//   // Find documents where nextApointmentDate matches today's date
//   const todayAppointments = await Patients.find({
//     nextApointmentDate: {
//       $gte: new Date(todayDateString + "T00:00:00Z"), // Start of today
//       $lt: new Date(todayDateString + "T23:59:59Z"), // End of today
//     },
//   })
//     .populate({
//       path: "doctor_id",
//     })
//     .exec();

//   // Filter the appointments based on patientNotification: true
//   const todayAppointmentWithNotification = todayAppointments.filter(
//     (appointment) => {
//       return appointment.doctor_id.patientNotification === true;
//     }
//   );

//   console.log("response", todayAppointmentWithNotification);
// }
// run();

///////////////////////////////////////////working code///////////////////

// schedule.scheduleJob("*/60 * * * * *", async function () {
//   async function run() {
//     const todayDate = new Date();
//     const todayDateString = todayDate.toISOString().split("T")[0];

//     const todayAppointments = await Patients.find({
//       nextApointmentDate: {
//         $gte: new Date(todayDateString + "T00:00:00Z"),
//         $lt: new Date(todayDateString + "T23:59:59Z"),
//       },
//     })
//       .populate({
//         path: "doctor_id",
//         match: {
//           patientNotification: true,
//           isActive: true,
//           isDeleted: false,
//         },
//       })
//       .exec();

//     if (todayAppointments.length) {
//       todayAppointments.map((element) => {
//         console.log(
//           "Patient find ",
//           element?._id,
//           element?.doctor_id?._id,
//           todayDateString
//         );
//         setTimeout(async () => {
//           const date = new Date();
//           const check = await SmsLog.countDocuments({
//             patientId: element?._id,
//             doctorId: element?.doctor_id?._id,
//             DateAndTime: {
//               $gte: new Date(todayDateString + "T00:00:00Z"),
//               $lt: new Date(todayDateString + "T23:59:59Z"),
//             },
//           });
//           if (check.length) {
//             console.log("SMS already been send !!!!");
//           } else {
//             let data = {
//               patientId: element?._id,
//               doctorId: element?.doctor_id?._id,
//               DateAndTime: date,
//             };
//             SmsLog.create(data)
//               .then((res) => {
//                 console.log("SMS send Successfully!!!!!", res.patientId);
//               })
//               .catch((error) => {
//                 console.log("Error in logginf SMS", error);
//               });
//           }
//         }, 2000);
//       });
//     } else {
//       console.log("There are no Patients to send SMS");
//     }
//   }
//   run();
// });

///////////////////////////////////////////////////////////////////////////

////////////////////////////////testing code //////////////////////

// async function run() {
//   const todayDate = new Date();
//   const todayDateString = todayDate.toISOString().split("T")[0];

//   const todayAppointments = await Patients.find({
//     nextApointmentDate: {
//       $gte: new Date(todayDateString + "T00:00:00Z"),
//       $lt: new Date(todayDateString + "T23:59:59Z"),
//     },
//   })
//     .populate({
//       path: "doctor_id",
//       match: {
//         patientNotification: true,
//         isActive: true,
//         isDeleted: false,
//       },
//     })
//     .exec();

//   if (todayAppointments.length) {
//     todayAppointments.map(async (element) => {
//       console.log(
//         "Patient find ",
//         element?._id,
//         element?.doctor_id?._id,
//         todayDateString
//       );

//       setTimeout(async () => {
//         const date = new Date();
//         const check = await SmsLog.countDocuments({
//           patientId: element?._id,
//           doctorId: element?.doctor_id?._id,
//           DateAndTime: {
//             $gte: new Date(todayDateString + "T00:00:00Z"),
//             $lt: new Date(todayDateString + "T23:59:59Z"),
//           },
//         });
//         if (check) {
//           console.log("SMS already been send !!!!");
//         } else {
//           let data = {
//             patientId: element?._id,
//             doctorId: element?.doctor_id?._id,
//             DateAndTime: date,
//           };
//           SmsLog.create(data)
//             .then((res) => {
//               console.log("SMS send Successfully!!!!!", res.patientId);
//             })
//             .catch((error) => {
//               console.log("Error in logginf SMS", error);
//             });
//         }
//       }, 2000);
//     });
//   } else {
//     console.log("There are no Patients to send SMS");
//   }
// }
// run();
