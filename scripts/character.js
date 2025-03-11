class Character {
	name;
	title;
	#hp;
	#mp;
	#currency;
	#atk;
	#def;
	#favor;
	#suspicion;
}

class Witchie extends Character {
	//Lab creation, will die if not feed magic power for a while
	//Airhead.
	//Will hesitate to kill characters if their hidden friendliness toward an character is high.
	thirst;
	hunger;
	#friendliness;
	#sanity;
}

class Safaye extends Character {
	//Silent Mage, quote: "......", ambiguous gender. Black short hair to ear, black eyes, black skin. 
	//Seems harmless enough until...
	//Attitude toward Witchie: Ignore (Friendly) -> Indulge (Romantic)
	//Only becomes interested in player if they killed them once. Will appear next day like nothing happens.
	//Can poly with any characters, don't give a damn whatsoever.
	//Seems to be a lot more friendly toward Stian for whatever reason.
}

class Dawa extends Character {
	//Popular student at school. Pretty, smart, atheletic, and kind. The perfect kid. Silver long straight hair.
	//Attitude toward Witchie: Friendly (Friendly) -> Cautious (?) -> Friendly (Friendly) -> Interested (Romantic)
	//Special event: running into her and Stian's exchange. Stian seems like he's trying to bully Dawa. 
	//If player try to interfere without knowing much, he will scoff and walk away. Dawa will not appreciate it that much either. 
	//Warn the player not to jump into things they have no idea about (Hint).
	//Player will be dragged into the woods the next morning by Stian.
	//Automatically become an enemy if player kills Stian (hard to notice).
}

class Stian extends Character {
	//But pretty responsible to his adopted little sister. Few know their relationship.
	//Friendly demeanor but cruel. Golden shoulder-length hair. Changes to braids during fall and winter because hair get fuzzy.
	//Reluctant to it, both him and Dawa never care to keep it a secret. But nobody asked anyways.
	//Villain to the end, will dislike player even more if they try to make friendly moves toward him.
	//Only way to not drop favor is to stand up against him.
	//Romance only open once player is strong enough to win a match against him, OR, kill a witch and being spotted by him.
	//If cunning: Disdain -> Noticed -> Partner in Crime?
	//If righteous: Disdain -> Laugh Stock -> Plaything
	//Could have a poly relationship with him & Dawa
	//Automatically become an enemy if player kills Dawa.
	//Seems quite hostile toward Safaye.
}

class Aurelia extends Character {
	//Princess-like fashion sense. Described as tall and model like, has bright wavy amber hair and amber eyes.
	//Actually a himbo knight. Strong, excel at martial arts.
}
 
class Javier extends Character {
	//Spanish Papa
}

class Yan extends Character {
	//Asian Milf
}

class Vindur extends Character {
	//Just happy to be here.
	//Has rescued dog vibe.
	//Loyal "Friend"?
	//Player's hidden friendliness will go high uncontrollably.
	//Unkillable character?
}

function createCharacter() {
	
}