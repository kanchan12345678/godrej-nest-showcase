export interface Client {
  id: string;
  name: string;
  logo: string;
}

export const clients: Client[] = [
  { id: "aiims", name: "AIIMS Raibariely", logo: "/aiims.png" },
  { id: "iocl", name: "IOCL", logo: "/iocl.webp" },
  { id: "bpcl", name: "BPCL", logo: "/bpcl.jpg" },
  { id: "hpcl", name: "HPCL", logo: "/hpcl.webp" },
  { id: "uppwd", name: "UP PWD", logo: "/uppwd.png" },
  { id: "uprnn", name: "UPRNN", logo: "/uprnn.png" },
  { id: "cpwd", name: "CPWD", logo: "/cpwd.jpeg" }, // Assuming placeholder for CPWD for now
  { id: "nabard", name: "NABARD", logo: "/NABARD.webp" },
  { id: "lohia_group", name: "LOHIA GROUP", logo: "/lohia gorup.png" },
  { id: "aero_alloy", name: "AERO ALLOY", logo: "/aero alloy.webp" },
  { id: "tata", name: "TATA", logo: "/tata.png" },
  { id: "lda", name: "LDA", logo: "/lda.png" },
  { id: "cnds", name: "C&DS", logo: "/cnds.jpg" },
  { id: "upsidco", name: "UPSIDCO", logo: "/upsidco.jpeg" },
  { id: "awas_vikas", name: "AWAS VIKAS", logo: "/awas vikas.jpeg" },
  { id: "hal", name: "HAL", logo: "/HAL.jpeg" },
  { id: "power_grid", name: "POWER GRID", logo: "/power grid.png" },
  { id: "ntpc", name: "NTPC", logo: "/ntpc.png" },
  { id: "gail", name: "GAIL", logo: "/gail.png" },
];
