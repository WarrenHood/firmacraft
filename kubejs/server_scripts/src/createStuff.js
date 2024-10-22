ServerEvents.recipes(event => {
    // Replace all usages of andesite with raw andesite in the Create mod
    event.replaceInput(
        {
            mod: "create",
            input: "minecraft:andesite"
        },
        "minecraft:andesite",
        "tfc:rock/raw/andesite"
    )

    console.log("Create recipes have been replaced!")
})