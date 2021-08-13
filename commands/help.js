function helpFn() {
    console.log(`
    alex + tree                 : get filesystem tree of current folder
    alex + organize             : organize files in current folder
    alex + tree + "path"        : get filesystem tree of specified folder
    alex + organize + "path"    : organize files in specified folder
                `);
}
module.exports={
    helpKey: helpFn
}