function altera_texto(){
    let texto = document.body.querySelector("#texto");

    let lista = [`Long ago
    Just like the hearse you die to get in again
    We are
    So far from you
    
    Burning on
    Just like the match you strike to incinerate
    The lives of everyone you know
    
    And what's the worst you take (worst you take)
    From every heart you break? (Heart you break)
    And like the blade you stain (blade you stain)
    Well, I've been holding on tonight`,
    
    `When I was a young boy
    My father took me into the city
    To see a marching band
    
    He said: Son, when you grow up
    Would you be the savior of the broken
    The beaten and the damned?
    
    He said: Will you defeat them
    Your demons, and all the non-believers
    The plans that they've made?`,

    `Well, when you go
    So never think I'll make you try to stay
    And maybe when you get back
    I'll be off to find another way
    
    Well, after all this time that you still owe
    You're still a good-for-nothing I don't know
    So take your gloves and get out
    Better get out while you can
    
    When you go, would you even turn to say
    I don't love you like I did yesterday
    
    Sometimes I cry so hard from pleading
    So sick and tired of all the needless beating
    But baby when they knock you
    Down and out is where you ought to stay`,

    `Well, when you go
    So never think I'll make you try to stay
    And maybe when you get back
    I'll be off to find another way
    
    Well, after all this time that you still owe
    You're still a good-for-nothing I don't know
    So take your gloves and get out
    Better get out while you can
    
    When you go, would you even turn to say
    I don't love you like I did yesterday
    
    Sometimes I cry so hard from pleading
    So sick and tired of all the needless beating
    But baby when they knock you
    Down and out is where you ought to stay`,

    `Mama, we all go to hell
    Mama, we all go to hell
    I'm writing this letter and wishing you well
    Mama, we all go to hell
    
    Oh, well, now
    Mama, we're all gonna die
    Mama, we're all gonna die
    Stop asking me questions
    I'd hate to see you cry
    Mama, we're all gonna die`]
    

    let numero_aleatorio = Math.floor(Math.random() * 5);

    texto.innerHTML = lista[numero_aleatorio]
    console.log(numero_aleatorio)
}

