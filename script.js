
const secrets = [
  {
    name: "Herobrine",
    category: "Legendary Mystery",
    image: "https://minecraft.wiki/images/Herobrine.png",
    description: "Herobrine is one of Minecraft's most famous legends. Players describe him as a mysterious character with completely white eyes. However, Herobrine is not an official mob in vanilla Minecraft.",
    how: "There is no legitimate vanilla survival method to find Herobrine. He is a community legend and has appeared in fan-made mods.",
    version: "Community legend"
  },
  {
    name: "Pink Sheep",
    category: "Rare Mob",
    image: "https://minecraft.wiki/images/Pink_Sheep.png",
    description: "Pink Sheep is a naturally occurring sheep variant. Its natural spawn chance is very low, making it a fun discovery.",
    how: "Explore grassy areas and look for naturally spawned sheep. You can also breed sheep with pink dye.",
    version: "Java & Bedrock"
  },
  {
    name: "Dinnerbone",
    category: "Name Easter Egg",
    image: "https://minecraft.wiki/images/Dinnerbone.png",
    description: "Naming a mob Dinnerbone turns it upside down. This is a famous developer-related Easter Egg.",
    how: "Use an anvil to rename a Name Tag to Dinnerbone, then use it on a mob.",
    version: "Java & Bedrock"
  },
  {
    name: "jeb_ Rainbow Sheep",
    category: "Name Easter Egg",
    image: "https://minecraft.wiki/images/Jeb_Sheep.gif",
    description: "A sheep named jeb_ cycles through different wool colours. Its actual wool colour does not change.",
    how: "Rename a Name Tag to jeb_ and use it on a sheep.",
    version: "Java & Bedrock"
  },
  {
    name: "Toast Rabbit",
    category: "Name Easter Egg",
    image: "https://minecraft.wiki/images/Toast_Rabbit.png",
    description: "Naming a rabbit Toast gives it a special black-and-white coat pattern. This Easter Egg was added as a tribute to a player's lost rabbit.",
    how: "Rename a Name Tag to Toast and use it on a rabbit.",
    version: "Java & Bedrock"
  },
  {
    name: "Blue Axolotl",
    category: "Rare Mob",
    image: "https://minecraft.wiki/images/Blue_Axolotl.png",
    description: "The blue axolotl is an extremely rare colour variant that cannot normally spawn naturally.",
    how: "Breed two axolotls. A baby has a 1 in 1200 chance of being blue.",
    version: "Java & Bedrock"
  },
  {
    name: "Charged Creeper",
    category: "Rare Mob",
    image: "https://minecraft.wiki/images/Charged_Creeper.png",
    description: "A charged creeper has a blue electrical aura and a much stronger explosion than a normal creeper.",
    how: "A creeper must be struck by lightning to become charged.",
    version: "Java & Bedrock"
  },
  {
    name: "Skeleton Horse Trap",
    category: "Rare Event",
    image: "https://minecraft.wiki/images/Skeleton_Horse.png",
    description: "During a thunderstorm, a lightning strike can create a skeleton horse trap. Approaching it triggers a special event.",
    how: "Explore during thunderstorms and watch for naturally spawned skeleton horse traps.",
    version: "Java & Bedrock"
  },
  {
    name: "Brown Mooshroom",
    category: "Rare Mob",
    image: "https://minecraft.wiki/images/Brown_Mooshroom.png",
    description: "Brown Mooshrooms are a rare variant of the mushroom-covered cow.",
    how: "Strike a red mooshroom with lightning to transform it into a brown mooshroom.",
    version: "Java & Bedrock"
  },
  {
    name: "Music Disc 11",
    category: "Secret Item",
    image: "https://minecraft.wiki/images/Music_Disc_11.png",
    description: "Disc 11 contains a strange recording of footsteps, breathing and other unsettling sounds.",
    how: "Get a skeleton to shoot a creeper. The creeper may drop a music disc, including Disc 11.",
    version: "Java & Bedrock"
  },
  {
    name: "Creeper Banner",
    category: "Secret Pattern",
    image: "https://minecraft.wiki/images/Flower_Charge_Banner_Pattern.png",
    description: "The Creeper Charge banner pattern lets players create a banner featuring a creeper face.",
    how: "Combine paper with a creeper head in a crafting table to make the banner pattern.",
    version: "Java & Bedrock"
  },
  {
    name: "Upside Down Mobs",
    category: "Name Easter Egg",
    image: "https://minecraft.wiki/images/Dinnerbone.png",
    description: "The Dinnerbone naming Easter Egg works on many mobs, turning their models upside down.",
    how: "Use a Name Tag named Dinnerbone or Grumm on a supported mob.",
    version: "Java & Bedrock"
  },
  {
    name: "Enderman Block Stealing",
    category: "Mob Behaviour",
    image: "https://minecraft.wiki/images/Enderman.png",
    description: "Endermen can pick up certain blocks and carry them around the world.",
    how: "Observe an enderman near blocks it can pick up. Not every block is supported.",
    version: "Java & Bedrock"
  },
  {
    name: "The Illusioner",
    category: "Hidden Mob",
    image: "https://minecraft.wiki/images/Illusioner.png",
    description: "The Illusioner is an unused illager mob with the ability to create copies of itself.",
    how: "In Java Edition, it can be summoned using commands. It does not naturally spawn in normal survival.",
    version: "Java Edition"
  },
  {
    name: "Giant Zombie",
    category: "Hidden Mob",
    image: "https://minecraft.wiki/images/Giant.png",
    description: "The Giant is a huge zombie-like mob that remains in the Java Edition game code but does not naturally spawn.",
    how: "Use the summon giant command in a world with cheats enabled.",
    version: "Java Edition"
  },
  {
    name: "Debug Stick",
    category: "Secret Item",
    image: "https://minecraft.wiki/images/Debug_Stick.png",
    description: "The Debug Stick allows players to change block states, such as the direction of certain blocks.",
    how: "Use the command /give @s minecraft:debug_stick in Java Edition with commands enabled.",
    version: "Java Edition"
  },
  {
    name: "Rainbow Sheep",
    category: "Name Easter Egg",
    image: "https://minecraft.wiki/images/Jeb_Sheep.gif",
    description: "The jeb_ sheep is a colour-changing sheep Easter Egg. It is a fun visual secret rather than a new sheep type.",
    how: "Rename a sheep jeb_ using a Name Tag.",
    version: "Java & Bedrock"
  },
  {
    name: "Woodland Mansion Rooms",
    category: "Hidden Structure",
    image: "https://minecraft.wiki/images/Woodland_Mansion.png",
    description: "Woodland Mansions contain different randomly arranged rooms, including unusual rooms that players may overlook.",
    how: "Find a Woodland Mansion and explore every floor and room carefully.",
    version: "Java & Bedrock"
  },
  {
    name: "Christmas Chests",
    category: "Seasonal Easter Egg",
    image: "https://minecraft.wiki/images/Christmas_Chest.png",
    description: "In Java Edition, normal chests receive a festive gift-like texture around Christmas.",
    how: "Open Minecraft Java Edition around December 24 to 26.",
    version: "Java Edition"
  },
  {
    name: "Secret Splash Texts",
    category: "Menu Easter Egg",
    image: "https://minecraft.wiki/images/Title_Screen.png",
    description: "The yellow splash text on the main menu displays random jokes, references and unusual messages.",
    how: "Launch Minecraft and look at the yellow text beside the title logo.",
    version: "Java & Bedrock"
  }
];

const container = document.getElementById("egg-container");
const modal = document.getElementById("modal");

function showSecrets(list) {
  container.innerHTML = "";

  list.forEach(secret => {
    const card = document.createElement("article");
    card.className = "egg-card";

    const img = document.createElement("img");
    img.src = secret.image;
    img.alt = secret.name;
    img.loading = "lazy";

    const info = document.createElement("div");
    info.className = "egg-info";

    const title = document.createElement("h3");
    title.textContent = secret.name;

    const description = document.createElement("p");
    description.textContent = secret.description.slice(0, 85) + "...";

    const category = document.createElement("span");
    category.textContent = secret.category;

    info.append(title, description, category);
    card.append(img, info);

    card.addEventListener("click", () => openSecret(secret));
    container.appendChild(card);
  });
}

function openSecret(secret) {
  document.getElementById("modal-image").src = secret.image;
  document.getElementById("modal-title").textContent = secret.name;
  document.getElementById("modal-category").textContent = secret.category;
  document.getElementById("modal-description").textContent = secret.description;
  document.getElementById("modal-how").textContent = secret.how;
  document.getElementById("modal-version").textContent =
    "Minecraft Version: " + secret.version;

  modal.classList.add("show");
}

document.getElementById("close").onclick = () => {
  modal.classList.remove("show");
};

modal.addEventListener("click", event => {
  if (event.target === modal) modal.classList.remove("show");
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") modal.classList.remove("show");
});

document.getElementById("search").addEventListener("input", event => {
  const query = event.target.value.toLowerCase();

  showSecrets(secrets.filter(secret =>
    secret.name.toLowerCase().includes(query) ||
    secret.category.toLowerCase().includes(query)
  ));
});

showSecrets(secrets);

