
const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "e@e.c",
    password: "1",
    taskNumber: {
      active: 2,
      completed: 1,
      failed: 0,
      newTask: 1
    },
    tasks: [{
        title: "Design homepage",
        description: "Create the homepage UI for the website",
        date: "2025-06-18",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Update logo",
        description: "Upload new company logo to server",
        date: "2025-06-17",
        category: "Branding",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Fix navbar bug",
        description: "Resolve navigation collapse issue on mobile",
        date: "2025-06-16",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },]
  },
  {
    id: 2,
    firstName: "Isha",
    email: "employee2@example.com",
    password: "123",
    taskNumber: {
      active: 2,
      completed: 1,
      failed: 1,
      newTask: 1
    },
    tasks: [{
        title: "Client onboarding",
        description: "Assist new client with system login",
        date: "2025-06-18",
        category: "Support",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Email campaign",
        description: "Draft and schedule promotional email",
        date: "2025-06-17",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Social media plan",
        description: "Create weekly posting schedule",
        date: "2025-06-15",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Landing page copy",
        description: "Write SEO-friendly landing page text",
        date: "2025-06-14",
        category: "Content",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },]
  },
  {
    id: 3,
    firstName: "Vivaan",
    email: "employee3@example.com",
    password: "123",
    taskNumber: {
      active: 1,
      completed: 1,
      failed: 1,
      newTask: 1
    },
    tasks: [{
        title: "Server health check",
        description: "Run diagnostics and update packages",
        date: "2025-06-18",
        category: "IT",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Backup database",
        description: "Backup production DB and upload to cloud",
        date: "2025-06-16",
        category: "IT",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Security scan",
        description: "Run security vulnerability test",
        date: "2025-06-15",
        category: "IT",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },]
  },
  {
    id: 4,
    firstName: "Diya",
    email: "employee4@example.com",
    password: "123",
    taskNumber: {
      active: 2,
      completed: 1,
      failed: 1,
      newTask: 1
    },
    tasks: [{
        title: "Write blog post",
        description: "Create a blog post for product launch",
        date: "2025-06-18",
        category: "Content",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Edit product photos",
        description: "Enhance and crop product photos",
        date: "2025-06-17",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Add alt tags",
        description: "Improve image accessibility on website",
        date: "2025-06-16",
        category: "SEO",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Keyword research",
        description: "Identify keywords for upcoming blog posts",
        date: "2025-06-14",
        category: "SEO",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },]
  },
  {
    id: 5,
    firstName: "Rohan",
    email: "employee5@example.com",
    password: "123",
    taskNumber: {
      active: 1,
      completed: 1,
      failed: 1,
      newTask: 1
    },
    tasks: [{
        title: "Set up payment gateway",
        description: "Integrate Stripe into the checkout page",
        date: "2025-06-18",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Test login flow",
        description: "Ensure login and registration are working",
        date: "2025-06-17",
        category: "QA",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Fix cart issue",
        description: "Resolve issue with duplicate cart items",
        date: "2025-06-15",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },]
  },
];


const admin = [
  {
    id: 100,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employeesData = JSON.parse(localStorage.getItem("employees"));
  const adminData = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
