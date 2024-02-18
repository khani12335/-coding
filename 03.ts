let guestList: string[] = [
    "amir",
    "kashif",
    "hassan",
];

function generateInvitationMessage(guest: string) string{
    return `dear ${guest},\n\n`+
    `i hope u are fine,\n\n`+
    `sinserly.\n[khan]`;
}

guestList.forEach(guest => {
    let invitationMessage = generateInvitationMessage(guest);
    console.log(invitationMessage);
    console.log("\n-------------------\n");
  });
