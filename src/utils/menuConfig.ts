const menuConfig: { [key: string]: { label: string; path: string }[] } = {
  admin: [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Task Management", path: "/task-management" },
    { label: "Leave Management", path: "/leave-management" },
    { label: "Employee Directory", path: "/employee-directory" },
  ],
  user: [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Task Management", path: "/task-management" },
    { label: "Leave Management", path: "/leave-management" },
  ],
};

export default menuConfig;
