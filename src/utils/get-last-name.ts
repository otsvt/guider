export const getLastName = (name: string): string => {
  const nameParts = name.split(" ");
  
  return nameParts[1] ? nameParts[1] : name;
};
