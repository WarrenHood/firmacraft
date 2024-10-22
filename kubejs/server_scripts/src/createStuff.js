ServerEvents.recipes(event => {
    // // Replace all usages of andesite with raw andesite in the Create mod
    // Remove all create recipes for now
    // Maybe at some point I'll add some recipes to make it compatible
    event.remove({
        mod: "create"
    })
    
    // event.replaceInput(
    //     {
    //         mod: "create",
    //         input: "minecraft:andesite"
    //     },
    //     "minecraft:andesite",
    //     "tfc:rock/raw/andesite"
    // )

    console.log("Create recipes have been replaced!")
})