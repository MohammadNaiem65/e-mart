export const Menus = [
  {
    title: "Dashboard",
    src: "admin/dashboard",
    iconSrc: "dashboard",
  },
  {
    title: "Products",
    src: "",
    iconSrc: "products",
    subMenus: [
      { title: "All Products", src: "admin/allproduct", iconSrc: "dashboard" },
      { title: "Brand", src: "admin/brand", iconSrc: "dashboard" },
      { title: "Category", src: "admin/category", iconSrc: "dashboard" },
    ],
  },
  {
    title: "Orders",
    src: "admin/orders",
    iconSrc: "orders",
  },
  {
    title: "Customers",
    src: "",
    iconSrc: "customers",
    subMenus: [
      {
        title: "Customer List",
        src: "admin/customer-list",
        iconSrc: "dashboard",
      },
      {
        title: "Add Customer",
        src: "admin/add-customer",
        iconSrc: "dashboard",
      },
      {
        title: "Contact Message",
        src: "admin/contact-message",
        iconSrc: "dashboard",
      },
      { title: "Newsletter", src: "admin/newsletter", iconSrc: "dashboard" },
    ],
  },
  {
    title: "Users Role",
    src: "",
    iconSrc: "users-role",
    subMenus: [
      {
        title: "Role Management",
        src: "admin/role-management",
        iconSrc: "dashboard",
      },
      {
        title: "Permission",
        src: "admin/role-permission",
        iconSrc: "dashboard",
      },
    ],
  },
  {
    title: "Site Contents",
    src: "",
    iconSrc: "content-management",
    subMenus: [
      { title: "About us", src: "admin/allproduct", iconSrc: "dashboard" },
      { title: "FAQ", src: "brand", iconSrc: "dashboard" },
      {
        title: "Privacy & Policies",
        src: "admin/privacy",
        iconSrc: "dashboard",
      },
      { title: "Terms & Conditions", src: "admin/terms", iconSrc: "dashboard" },
      { title: "Return Policy", src: "admin/return", iconSrc: "dashboard" },
    ],
  },
  {
    title: "Setting",
    src: "",
    iconSrc: "setting",
    subMenus: [
      { title: "Website Setup", src: "admin/site-setup", iconSrc: "dashboard" },
      {
        title: "Database Setup",
        src: "admin/site-database",
        iconSrc: "dashboard",
      },
    ],
  },
];
