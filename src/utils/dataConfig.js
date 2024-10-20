export const convertCurrency = (value) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Number(value)).split(".")[0];
}

export const labelsGroup = [
  {
    name: "id",
    label: "Identificación",
  },
  {
    name: "group",
    label: "Agrupación",
  },
  {
    name: "city",
    label: "Ciudad",
  },
  {
    name: "location",
    label: "Localidad",
  },
  {
    name: "actions",
    label: "Acciones",
  },
];

export const labelsUser = [
  {
    name: "name",
    label: "Nombre",
  },
  {
    name: "identification",
    label: "Identificación",
  },
  {
    name: "email",
    label: "Correo",
  },
  {
    name: "rol",
    label: "Rol",
  },
  {
    name: "status",
    label: "Estado",
  },
  {
    name: "actions",
    label: "Acciones",
  },
];

export const labelsAdmin = [
  {
    name: "name",
    label: "Nombre",
  },
  {
    name: "status",
    label: "Estado",
  },
  {
    name: "actions",
    label: "Acciones",
  },
];

export const btnsConfig = (navigate) => [
  {
    name: "Usuarios / Perfiles",
    action: () => navigate("/users"),
  },
  {
    name: "Importadores",
    action: () => navigate("/import"),
  },
  {
    name: "Tipos de gestión",
    action: () => navigate("/management"),
  },
  {
    name: "Conceptos de Administración",
    action: () => navigate("/adminConcept"),
  },
  {
    name: "Acciones de cartera",
    action: () => navigate("/briefcase"),
  }

]