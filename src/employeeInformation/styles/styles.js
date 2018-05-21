import {
  Store,
  LocalHospital,
  FlightTakeoff,
  TrendingUp,
  DateRange
} from "@material-ui/icons";

export const yearSelectionStyle = { fontSize: "100%", height: "30%" };
export const userSelectionStyle = {
  width: "80%",
  height: "30%",
  fontSize: "100%"
};

export const leaveTypeCardStyle = {
  "1": {
    icon: LocalHospital,
    iconColor: "blue",
    title: "Sick Leave",
    statIcon: DateRange
  },
  "2": {
    icon: FlightTakeoff,
    iconColor: "orange",
    title: "Vacation",
    statIcon: DateRange
  },
  "3": {
    icon: Store,
    iconColor: "green",
    title: "Home Office",
    statIcon: DateRange
  },
  "4": {
    icon: DateRange,
    iconColor: "red",
    title: "Other Leave",
    statIcon: DateRange
  },
  "5": {
    icon: TrendingUp,
    iconColor: "purple",
    title: "Training",
    statIcon: DateRange
  }
};

export const leaveTypeHighlight = `.DayPicker-Day--homeOffice {
  background: linear-gradient(60deg, #66bb6a, #43a047);
  color: white;
}
.DayPicker-Day--sick {
   background: linear-gradient(60deg, #26c6da, #00acc1);
  color: white;
}
.DayPicker-Day--other {
   background: linear-gradient(60deg, #ef5350, #e53935);
  color: white;
}
.DayPicker-Day--training {
  background: linear-gradient(60deg, #ab47bc, #8e24aa);
  color: white;
} 
.DayPicker-Day--vacation   {
  background: linear-gradient(60deg, #ffa726, #fb8c00);
  color: white;
}`;
