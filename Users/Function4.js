import { users } from "./users.js";

export function grouping_progr()
{
    const result = {};

    for (const user in users) {
        const designation = users[user].desgination.toLowerCase();

        if (designation.includes("golang")) {
            result["Golang"] = result["Golang"] || [];
            result["Golang"].push(user);

        } else if (designation.includes("javascript")) {
            result["Javascript"] = result["Javascript"] || [];
            result["Javascript"].push(user);

        } else if (designation.includes("python")) {
            result["Python"] = result["Python"] || [];
            result["Python"].push(user);
        }
    }

    return result;

}

// console.log(grouping_progr());