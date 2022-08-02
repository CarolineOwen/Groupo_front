//fonction pour aimer ou pas aimer les posts
// exports.likesAndDislikes = (req, res, next) => {
//     //console.log(req.body.userId);
//     Post.findOne({ _id: req.params.id })
//       .then((post) => {
//         //like = 1
//         //si le tableau est vide et que la requete on like alors on ajoute 1
       
//         if (!post.usersLiked.includes(req.body.userId) ) {
         
//           Post.updateOne(
//             { _id: req.params.id },
//             {$push: { usersLiked: req.body.userId },
//             }
//           )
//             .then(() => res.status(201).json({ message: "like +1" }))
//             .catch((error) => {
//               return res.status(404).json({ error });
//             });
//         }
//         //like = 0
//       if (post.usersLiked.includes(req.body.userId) ) {
//           Post.updateOne(
//             { _id: req.params.id },
//             {
            
//               $pull: { usersLiked: req.body.userId },
//             }
//           )
//             .then(() => res.status(201).json({ message: "like 0" }))
//             .catch((error) => res.status(404).json({ error }));
//         }
//         //like = -1
//         if (
//           !post.usersDisliked.includes(req.body.userId) 
//         ) {
//           Post.updateOne(
//             { _id: req.params.id },
//             {
            
//               $push: { usersDisliked: req.body.userId },
//             }
//           )
//             .then(() => res.status(201).json({ message: "dislike 1" }))
//             .catch((error) => res.status(404).json({ error }));
//         }
//         //like = 0 après un like -1(enlever le dislike)
//         if (
//           post.usersDisliked.includes(req.body.userId)  
//         ) {
//           Post.updateOne(
//             { _id: req.params.id },
//             {
             
//               $pull: { usersDisliked: req.body.userId },
//             }
//           )
//             .then(() => res.status(201).json({ message: "dislike 0" }))
//             .catch((error) => res.status(404).json({ error }));
//         }
//       })
//       .catch((error) => res.status(404).json({ error }));
//   };