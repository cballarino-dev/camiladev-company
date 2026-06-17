export function validateYearsOfExperience(years: number): boolean {
   return years  >= 0 && years <= 50;
}

function hasAtLeastOneNonEmptySkill(skills: string[]): boolean {
return skills.some((skill) => skill.trim().length > 0);
}

 export function validateSkills(skills: string[]): boolean {
 return Array.isArray(skills) && hasAtLeastOneNonEmptySkill(skills);
}

export function validateEmail(email: string): boolean {
const normalized = email.trim();
return normalized.includes("@") && normalized.includes(".");
}

export function validatePhone(phone: string): boolean {
return phone.trim().length > 0;
}


function validateRequiredSkills(skills: string[]): boolean {
 return Array.isArray(skills) && hasAtLeastOneNonEmptySkill(skills);
}

function validateMinYearsExperience(years: number): boolean {
  return Number.isFinite(years) && years >= 0;
}
function validateMaxYearsExperience(min:number, max: number): boolean {
  return Number.isFinite(min) && Number.isFinite(max) && max >= min && min >= 0;
}

function validateSalaryRange(min: number, max: number): boolean {
  return Number.isFinite(min) && Number.isFinite(max) && min > 0 && max > 0 && max >= min;
}