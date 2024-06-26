export const argumentMatch = `
h1 Some possible arguments for command "{{command}}"
{{matches}}
`;

export const commandMatch = `
h1 Did you mean?
{{matches}}
`;

export const unknownCommand = `
h1 Unknown command "{{command}}"
p You entered an unknown command
`;

export const initialOutput = `
h1 Wake up, Neo...
p You wake up with an unpleasant anticipation of yet another day full of work and routine.
p Yesterday, you started seriously thinking about what alternatives are out there that could break you out of this strange cycle.
`;

export const help = `
b Help
p The commands available can be discovered by double tapping the Tab key.
`;

export const google = `
h1 Google results
ul
  li
    b Unit of self-sufficiency
`;

export const hasReadManifest = `
p You read about unit of self-sufficiency and it seemed quite reasonable.
p It seems relatively simple too, so you want to start thinking in this direction.
p You created a todo list.
`;

export const googleCommands = `
b Possible google commands
ul
  li Self-sufficiency
`;

export const todo = `
b Todo
ul
  li Inquire about land costs        
`;

export const availableCommands = `
b Available commands
p Note: You can autocomplete queries by hitting Tab. For example, enter "goo" and hit Tab key, you will get "google"
p Then if you hit Tab twice you will get some options of what makes sense to google.
div
  i google
  p Allows to find something on the internet
  p Try writing 
`;
