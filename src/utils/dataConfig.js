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

export const labelsBillingConcept = [
  {
    name: "name",
    label: "Nombre",
  },
  {
    name: "actions",
    label: "Acciones",
  }
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

export const labelsTemplates = [
  {
    name: "register",
    label: "Registro",
  },
  {
    name: "lastUpdate",
    label: "Ultima actualización",
  },
  {
    name: "name",
    label: "Nombre",
  },
  {
    name: "type",
    label: "Tipo",
  },
  {
    name: "actions",
    label: "Acciones",
  }
]

export const labelsUsuryRate = [
  {
    name: "register",
    label: "Registro",
  },
  {
    name: "percentage",
    label: "Porcentaje",
  },
  {
    name: "applyDate",
    label: "Aplica desde",
  },
  {
    name: "actions",
    label: "Acciones",
  }
]

export const labelsMoneyLocation = [
  {
    name: "name",
    label: "Nombre",
  },
  {
    name: "type",
    label: "Tipo",
  },
  {
    name: "status",
    label: "Estado",
  },
  {
    name: "actions",
    label: "Acciones",
  }
]

export const labelsAgreementTypes = [
  {
    name: "title",
    label: "Título",
  },
  {
    name: "detail",
    label: "Detalle",
  },
  {
    name: "register",
    label: "Registro",
  },
  {
    name: "status",
    label: "Estado",
  },
  {
    name: "actions",
    label: "Acciones",
  }
]

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
    name: "Conceptos de cobro",
    action: () => navigate("/billingConcept"),
  },
  {
    name: "Acciones de cartera",
    action: () => navigate("/briefcase"),
  },
  {
    name: "Plantillas",
    action: () => navigate("/template"),
  },
  {
    name: "Tasa de usura",
    action: () => navigate("/usuryRate"),
  }

]