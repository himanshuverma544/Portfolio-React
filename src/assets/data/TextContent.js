const textContent = {
  
  /* Portfolio Modals */

  porCabinModal : "Imagine waking up every morning in a cozy log cabin nestled in the woods. The smell of fresh pine fills the air as you step onto the creaky wooden floors. The natural beauty of the surroundings calms your mind and soothes your soul. For many people, owning a log cabin is more than just a dream - it's a way of life. Whether it's a place to escape from the hustle and bustle of city living or a permanent residence, log cabins provide a sense of peace and tranquility that can't be found anywhere else. If you're a person who values nature and wants to live a simpler, more rustic lifestyle, a log cabin might just be the perfect home for you.",

  porCakeModal : "Indulging in a delicious piece of cake can be an incredibly joyful experience. From the first bite, the soft and moist texture along with the perfect blend of sweetness creates a sensory explosion that can make anyone smile. Whether you're celebrating a special occasion or just treating yourself, a tasty cake is a wonderful way to elevate your mood and bring a little happiness into your day. For some people, baking and decorating cakes is not just a hobby but a passion. The endless possibilities of flavors and designs make it a creative outlet that can bring immense joy and satisfaction. So, whether you're a seasoned baker or just someone with a sweet tooth, a tasty cake is something that can make anyone's day a little sweeter.",

  porCircusModal : "The sight of a colorful circus tent can bring back childhood memories and excitement. From the awe-inspiring acrobatics to the comical clowns and amazing animal acts, a circus tent is a magical place that can transport you to a world of wonder and amazement. For the performers, the circus tent is not just a stage but a home where they live, work and travel together as a family. The tent provides a sense of camaraderie and community that is hard to find elsewhere. From the towering high wire to the tiny tricycle, every act is an important part of the show, and every performer plays their role to perfection. The circus tent is not just a place to watch a show but an experience that can leave a lasting impression on your heart and soul. So, step right up and enter the circus tent - a world of adventure and magic awaits you!",

  porGameModal : "For many gamers, a game controller is more than just a tool for playing video games. It's an extension of their hands and an essential part of their gaming identity. The familiarity and comfort of a well-worn game controller can provide a sense of nostalgia and connection to cherished memories. Whether it's the thrill of beating a tough boss or the camaraderie of playing with friends, a game controller can bring joy and excitement to a person's life. For some people, the skills and strategy required for mastering game controllers can be a valuable asset in other areas of life, such as problem-solving and decision-making. So, if you're a gamer, grab your game controller and embark on a journey of adventure and fun - the possibilities are endless!",

  porSafeModal : "A locked safe is more than just a container for storing valuable possessions. It's a symbol of security and protection that can give a person peace of mind. The sturdy construction and advanced locking mechanisms of a safe can deter theft and keep important items safe from harm. Whether it's valuable jewelry, important documents, or sentimental items, a locked safe can ensure that they remain secure and intact. For some people, owning a locked safe is not just a practical measure but a source of pride and accomplishment. The responsibility of maintaining and securing the safe can provide a sense of maturity and empowerment. So, if you're someone who values security and protection, consider investing in a locked safe - it's a decision that can provide a lifetime of peace of mind.",

  porSubmarineModal : "A submarine is more than just a vehicle for exploring the depths of the ocean. It's a symbol of human ingenuity and courage. The technology and engineering required to create a submarine are a testament to the human ability to overcome challenges and push the limits of what's possible. For those who operate and work on submarines, it's not just a job but a way of life. The confined space and constant danger require a level of discipline and focus that can be challenging but also rewarding. From navigating through treacherous waters to executing complex missions, a submarine provides a unique opportunity to serve and protect one's country while exploring the vast unknown depths of the ocean. For some people, the sense of adventure and the thrill of the unknown is a calling that cannot be ignored. So, if you're someone who's fascinated by the mysteries of the ocean and has a desire for exploration, a submarine might just be the perfect vessel to satisfy your curiosity and sense of adventure.",
  

  /* About Section */

  aboutSecLeftContent : "I'm the kind of person who loves to do adventures and is always seeking out new experiences. I have a jaunty and bubbly personality, and I find joy in even the smallest things. I approach life with a playful spirit, and I'm always looking for ways to make things more fun and exciting. Whether it's trying out a new activity, exploring a new place, or meeting new people, I'm up for anything that challenges me and broadens my horizons. My energy is infectious, and I love to bring out the best in others with my positive attitude and sense of humor. Life is an adventure, and I'm here to make the most of it!",

  aboutSecRightContent : "One of the things that I find most fulfilling about being adventurous is the sense of accomplishment that comes with trying new things. Whether it's conquering a fear, mastering a new skill, or completing a challenging task, I love the feeling of satisfaction that comes with pushing myself to my limits. I believe that taking risks and stepping outside of my comfort zone has helped me grow as a person and develop a deeper understanding of myself and the world around me. I always approach each experience with an open mind and a willingness to learn from my mistakes.",


  /* Footer */

  footRightConAbout : "The person who loves to do adventures and is jaunty, bubbly and playful."

};

function getTextContent(key) {
  if (key in textContent) {
    return textContent[key];
  }
  else {
    console.log(`"${key}" key isn't found in textContent object.`);
  }
}

export default getTextContent;