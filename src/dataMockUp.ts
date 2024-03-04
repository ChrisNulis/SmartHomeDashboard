export interface Device {
  status: boolean;
  switch: string;
  location: string;
}

export const devices: Device[] = [
  {
    status: false,
    switch: "Switch 1.1",
    location: "Living Room",
  },
  {
    status: true,
    switch: "Switch 1.2",
    location: "Dining Room",
  },
  {
    status: true,
    switch: "Switch 1.3",
    location: "Bedroom",
  },
  {
    status: false,
    switch: "Switch 2.1",
    location: "Garage",
  },
  {
    status: true,
    switch: "Switch 2.2",
    location: "Front Door",
  },
  {
    status: true,
    switch: "Switch 2.3",
    location: "Back Door",
  },
  {
    status: false,
    switch: "Switch 3.1",
    location: "Backyard",
  },
  {
    status: true,
    switch: "Switch 3.2",
    location: "Left Alley",
  },
  {
    status: true,
    switch: "Switch 3.3",
    location: "Storage Room",
  },
];