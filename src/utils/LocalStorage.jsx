  // LocalStorage.js
  const employees = [
    {
      id: 1,
      name: "Ali Khan",
      email: "ali.khan@example.com",
      password: "12345",
      taskCount: {
        active: 3,
        failed: 2,
        complete: 4,
        newTask: 1,
      },
      tasks: [
        { id: 101, title: "Fix Login Bug", description: "Resolve issue in login API", category: "Development", date: "2025-09-01", status: "active" },
        { id: 102, title: "Frontend Errors", description: "Fix CSS issues on dashboard", category: "Development", date: "2025-09-02", status: "active" },
        { id: 103, title: "Optimize Queries", description: "Improve DB query performance", category: "Database", date: "2025-09-03", status: "active" },
        { id: 104, title: "Client Meeting", description: "Missed meeting with client", category: "Management", date: "2025-08-28", status: "failed" },
        { id: 105, title: "Code Review", description: "Incomplete PR review", category: "Development", date: "2025-08-25", status: "failed" },
        { id: 106, title: "Logo Design", description: "Delivered new logo", category: "Design", date: "2025-08-20", status: "complete" },
        { id: 107, title: "Payment Gateway", description: "Integrated Stripe", category: "Development", date: "2025-08-18", status: "complete" },
        { id: 108, title: "Unit Testing", description: "Added Jest tests", category: "QA", date: "2025-08-15", status: "complete" },
        { id: 109, title: "Email Setup", description: "Configured email service", category: "IT Support", date: "2025-08-12", status: "complete" },
        { id: 110, title: "Deploy New Build", description: "Prepare staging deployment", category: "DevOps", date: "2025-09-05", status: "newTask" },
      ],
    },
    {
      id: 2,
      name: "Sara Ahmed",
      email: "sara.ahmed@example.com",
      password: "12345",
      taskCount: {
        active: 2,
        failed: 3,
        complete: 2,
        newTask: 2,
      },
      tasks: [
        { id: 201, title: "Prepare Presentation", description: "Slides for client demo", category: "Management", date: "2025-09-01", status: "active" },
        { id: 202, title: "Recruitment Drive", description: "Interview candidates", category: "HR", date: "2025-09-02", status: "active" },
        { id: 203, title: "Missed Call", description: "Didn't follow up client", category: "Management", date: "2025-08-28", status: "failed" },
        { id: 204, title: "Late Submission", description: "Project delay", category: "Development", date: "2025-08-25", status: "failed" },
        { id: 205, title: "Server Crash", description: "Didn't handle alerts", category: "DevOps", date: "2025-08-22", status: "failed" },
        { id: 206, title: "Client Docs", description: "Prepared SRS docs", category: "Management", date: "2025-08-20", status: "complete" },
        { id: 207, title: "Sprint Planning", description: "Planned upcoming sprint", category: "Agile", date: "2025-08-18", status: "complete" },
        { id: 208, title: "UI Mockups", description: "Designing wireframes", category: "Design", date: "2025-09-05", status: "newTask" },
        { id: 209, title: "Testing Plan", description: "Setup test cases", category: "QA", date: "2025-09-06", status: "newTask" },
      ],
    },
    {
      id: 3,
      name: "Bilal Malik",
      email: "bilal.malik@example.com",
      password: "12345",
      taskCount: {
        active: 1,
        failed: 1,
        complete: 3,
        newTask: 2,
      },
      tasks: [
        { id: 301, title: "Setup Docker", description: "Containerize app", category: "DevOps", date: "2025-09-01", status: "active" },
        { id: 302, title: "Data Migration", description: "Migration failed", category: "Database", date: "2025-08-29", status: "failed" },
        { id: 303, title: "Blog Deployment", description: "Launched blog", category: "Development", date: "2025-08-20", status: "complete" },
        { id: 304, title: "Fix SEO", description: "Improved SEO ranking", category: "Marketing", date: "2025-08-19", status: "complete" },
        { id: 305, title: "SSL Setup", description: "Installed SSL cert", category: "Security", date: "2025-08-17", status: "complete" },
        { id: 306, title: "Update README", description: "Add docs", category: "Documentation", date: "2025-09-05", status: "newTask" },
        { id: 307, title: "API Testing", description: "Postman collection", category: "QA", date: "2025-09-06", status: "newTask" },
      ],
    },
    {
      id: 4,
      name: "Hina Fatima",
      email: "hina.fatima@example.com",
      password: "12345",
      taskCount: {
        active: 4,
        failed: 2,
        complete: 1,
        newTask: 2,
      },
      tasks: [
        { id: 401, title: "Onboarding New Hires", description: "Setup accounts", category: "HR", date: "2025-09-01", status: "active" },
        { id: 402, title: "Training Session", description: "Conduct training", category: "HR", date: "2025-09-02", status: "active" },
        { id: 403, title: "Design Review", description: "Review new designs", category: "Design", date: "2025-09-03", status: "active" },
        { id: 404, title: "Team Meeting", description: "Weekly standup", category: "Management", date: "2025-09-04", status: "active" },
        { id: 405, title: "Task Missed", description: "Didn't finish sprint", category: "Agile", date: "2025-08-29", status: "failed" },
        { id: 406, title: "Delayed Report", description: "Report not sent", category: "Management", date: "2025-08-28", status: "failed" },
        { id: 407, title: "Portfolio Update", description: "Updated portfolio", category: "Design", date: "2025-08-20", status: "complete" },
        { id: 408, title: "Mobile Prototype", description: "Wireframe app", category: "Design", date: "2025-09-05", status: "newTask" },
        { id: 409, title: "System Monitoring", description: "Setup alerts", category: "DevOps", date: "2025-09-06", status: "newTask" },
      ],
    },
    {
      id: 5,
      name: "Usman Tariq",
      email: "usman.tariq@example.com",
      password: "12345",
      taskCount: {
        active: 2,
        failed: 2,
        complete: 2,
        newTask: 1,
      },
      tasks: [
        { id: 501, title: "Fix API Error", description: "Resolve 500 error", category: "Backend", date: "2025-09-01", status: "active" },
        { id: 502, title: "Bug Report", description: "Investigate user bug", category: "QA", date: "2025-09-02", status: "active" },
        { id: 503, title: "Missed Standup", description: "Absent from daily", category: "Management", date: "2025-08-29", status: "failed" },
        { id: 504, title: "Deployment Delay", description: "Missed deadline", category: "DevOps", date: "2025-08-28", status: "failed" },
        { id: 505, title: "DB Indexing", description: "Added indexes", category: "Database", date: "2025-08-20", status: "complete" },
        { id: 506, title: "Responsive Layout", description: "Made UI responsive", category: "Design", date: "2025-08-18", status: "complete" },
        { id: 507, title: "New Feature", description: "Add chat system", category: "Development", date: "2025-09-05", status: "newTask" },
      ],
    },
  ];

  const admin = [
    {
      id: 1,
      Adminname: "Sohaib",
      email: "sohaibali1277@gmail.com",
      password: "12345",
    },
  ];

  export const setlocalstorage = () => {
    if (!localStorage.getItem("employees")) {
      localStorage.setItem("employees", JSON.stringify(employees));
    }
    if (!localStorage.getItem("admin")) {
      localStorage.setItem("admin", JSON.stringify(admin));
    }
  };

  export const getlocalstorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    const admin = JSON.parse(localStorage.getItem("admin")) || [];

    return {
      employees,
      admin,
    };
  };  