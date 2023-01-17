import { EventModel } from "@bryntum/scheduler";

// Custom event model
export default class MeetingBookingModel extends EventModel {
  static $name = "MeetingBookingModel";

  static fields = [
    { name: "attendees", type: "number", defaultValue: 2 },
    { name: "eventType", type: "string", defaultValue: "meeting" },
    { name: "organizers", type: "object" },
    { name: "notes", type: "string" },
    { name: "projectorNeeded", type: "boolean" },
    { name: "laptopNeeded", type: "boolean" },
    { name: "meetingImage", type: "object" },
  ];
}
