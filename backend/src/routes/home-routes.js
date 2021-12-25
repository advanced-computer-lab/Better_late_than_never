const express = require("express");
const HomeController = require("../controllers/home-controller");
const router = express.Router();
const homeController = new HomeController();

router.get("/search", homeController.searchDoctor.bind(homeController));

router.get("/doctors", homeController.allDoctors.bind(homeController));
router.get("/patients", homeController.allPatient.bind(homeController));

router.post("/slot", homeController.createSlot.bind(homeController));

router.post(
  "/doctor-department",
  homeController.updateDoctor.bind(homeController)
);

router.get(
  "/get-your-department/:id",
  homeController.getYourDepartment.bind(homeController)
);
router.get(
  "/get-your-appointments/:id",
  homeController.getYoursAppointments.bind(homeController)
);

router.get("/departments", homeController.departments.bind(homeController));

router.post(
  "/appointment",
  homeController.createAppointment.bind(homeController)
);

router.post(
  "/appointment-update",
  homeController.updateAppointment.bind(homeController)
);

router.get(
  "/get-your-patient/:id",
  homeController.getYourPatients.bind(homeController)
);

router.get(
  "/appointment/:id",
  homeController.getAppointments.bind(homeController)
);

router.get(
  "/appointments/:id",
  homeController.getAppointmentsTow.bind(homeController)
);

router.get(
  "/time-slot/:doctor_id",
  homeController.getDoctorTimeSlot.bind(homeController)
);

module.exports = router;
