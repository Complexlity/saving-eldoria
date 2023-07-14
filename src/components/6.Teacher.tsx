const ChapterSix = () => {
  return (
    <div>
      <h1 className="text-center">
        <span>Chapter Six:</span> Teacher
      </h1>
      <p>
        The best and worst thing about having a brilliant apprentice is they never let
        you go. Always coming up with questions. This is what every good teacher
        aspire to have.
      </p>
      <blockquote className="text-lg">
        Can you teach me the algorithm? (
        <span className="not-italic font-normal">At this point, you know who is asking. Jen of course</span>)
      </blockquote>
      <p>
        Here's the step by step approach I have taken in selecting these
        pokemons:
      </p>
      <ul>
        <li>
          <p>
            <strong>Remove null/unknow types</strong>
          </p>
          <p>
            In the given database, there are some pokemons with only one
            attribute i.e. they either don't have a type1 or a type2.
          </p>
          <p>
            This does not help our cause because selecting more than one of them
            would mean we can no longer attain balance. So I remove all those
            pokemons from the database and only work with those having two
            attributes
          </p>
        </li>
        <li>
          <p>
            <strong>Finding the average values in the database</strong>
          </p>
          <p>
            Next, we go through the entire database to find the average of all
            the numerical attributes (excluding the total). We need this value
            to be able to pick strongest pokemons first
          </p>
        </li>
        <li>
          <p>
            <strong>Looping and Selecting</strong>
          </p>
          <p>Now we have the average. Here how we use it to pick a value:</p>
          <ul>
            <li>
              Loop through the items and find the pokemon whom one of it's
              numerical attributes greatly exceed the average. It could be any
              of the attributes (HP, Attack, Special Attack, Special Defense,
              Speed).
            </li>
            <li>
              Remove this pokemon's type1 and type2 attribute from the next
              search because we want to search for a pokemon that would not
              exhibit any of those chosen before.
            </li>
            <li>
              Repeat the process until we have picked all the type1 and type2
              attributes have been filled.
            </li>
          </ul>
        </li>
        <li>
          <p>
            <strong>The Final Pick</strong>
          </p>
          <p>
            For this last pokemon, we want something that would compliment all
            the pokemon's attributes so we just go into the data and pick the
            pokemon with the highest Total points (as long as it hasn't been
            picked before). <br></br>We also ensure they have both type1 and type2 as
            backup in case one of those attributes sustain serious damage
          </p>
        </li>
      </ul>
      <p>
        That's it Jen, soon you will be one  coming up with some serious
        algorithms of your own
      </p>
    </div>
  );
}

export default ChapterSix;