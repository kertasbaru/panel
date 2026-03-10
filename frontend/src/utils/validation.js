export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const isPhone = (phone) => /^08[0-9]{8,12}$/.test(phone);
export const isPin = (pin) => /^[0-9]{6}$/.test(pin);
export const minLength = (value, min) => value && value.length >= min;
