export type EmployeeStatus = "active" | "inactive";

export interface Employee {
  id: string | number;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  image?: string;
  status?: EmployeeStatus;
  company: any;
}

export interface Leave {
  requestId: number;
  userId: number;
  leaveType: string;
  name: string;
  startDate: string;
  endDate: string;
  status: string;
  reason: string;
}
