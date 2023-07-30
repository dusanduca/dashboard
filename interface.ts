export interface Task {
  id: number;
  projectId: string;
  title: string;
  timeRecords: TimeRecord[];
  done: boolean;
}

export interface TimeRecord {
  hours: number;
  date: string;
}

export interface Project {
  id: string;
  title: string;
}


export interface Date {
  day: number;
}

export interface Weekday {
  letter: string;
}