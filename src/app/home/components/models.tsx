interface Stage {
  index: number;
  title: string;
  description: string;
  image: string;
}

interface View {
  title: string;
  stages: Stage[];
}

interface Model {
  title: string;
  description: string;
  views: View[];
  final: {
    title: string;
    desc: string;
    video: {
      front: string;
      back: string;
    };
  };
  finalImage?: {
    frontImage?: string;
    backImage?: string;
  };
}

export const models: Model[] = [
  {
    title: "Model A - Bridal Wear for Traditional Marriage",
    description:
      "Model A is a bespoke bridal design tailored for traditional marriage ceremonies, crafted with precision and cultural flair. It captures the beauty of structured corsetry and mermaid silhouettes, enhanced with rich kente fabric and intricate beading to celebrate heritage and craftsmanship.",
    views: [
      {
        title: "Front View",
        stages: [
          {
            index: 1,
            title: "First Stage",
            description:
              "A fitted underbust corset designed to shape the bust and torso, paired with a mermaid-style skirt featuring four darts, two princess seams at the front, and two at the back. The ensemble was crafted using a combination of plain kente and multicolored kente fabric.",
            image: "/assets/wedding-dresses/model a/1f.jpg",
          },
          {
            index: 2,
            title: "Second Stage",
            description:
              "Bra cup inserts were added to the bust area, followed by the attachment of two straps to the hem of the corset top. The front and back panels of the mermaid skirt were joined with a seam, and both the top edge and waistline were neatly finished with lining.",
            image: "/assets/wedding-dresses/model a/2f.jpg",
          },
          {
            index: 3,
            title: "Third Stage",
            description:
              "A structural element was incorporated into the corset top, extending from the underbust to the shoulder. Beading was applied to enhance the detailing of both the corset and the skirt, adding definition and visual interest.",
            image: "/assets/wedding-dresses/model a/3f.jpg",
          },
        ],
      },
      {
        title: "Back View",
        stages: [
          {
            index: 1,
            title: "First Stage",
            description:
              "The back of the corset mirrors the fitted structure, shaped with princess seams and darts for a tailored silhouette. The multicolored kente extends gracefully down the spine, anchoring the mermaid shape with clean seam lines.",
            image: "/assets/wedding-dresses/model a/1b.jpg",
          },
          {
            index: 2,
            title: "Second Stage",
            description:
              "The corset back receives bra-cup reinforcements and integrated strap placements, while the back panel of the skirt is secured and lined at the waist for a smooth finish. The kente pattern alignment is carefully maintained to ensure symmetry.",
            image: "/assets/wedding-dresses/model a/2b.jpg",
          },
          {
            index: 3,
            title: "Third Stage",
            description:
              "Structural detailing is extended across the upper back, integrating shoulder framing elements for support. Beading decorates the back corset and the train of the skirt, enhancing the garment’s elegance and highlighting the tailored craftsmanship.",
            image: "/assets/wedding-dresses/model a/3b.jpg",
          },
        ],
      },
    ],
    final: {
      title: "From Sketch to Reality - The Final Masterpiece",
      desc: "The final reveal showcases a harmonized blend of tradition and sophistication—kente elegance meets corseted refinement, brought to life through careful tailoring, cultural symbolism, and ornamental beading. A regal look fit for a traditional bridal celebration.",
      video: {
        front: "/assets/wedding-dresses/model a/final1.mp4",
        back: "/assets/wedding-dresses/model a/final2.mp4",
      },
    },
  },
  {
    title: "Model B - Graduation Wear Made With Plain and Designed Kente",
    description:
      "Model B is a stylish and culturally inspired graduation outfit that pairs a structured underbust corset with a pencil skirt. Crafted from both plain and patterned kente fabric, the design highlights contemporary tailoring, figure-flattering lines, and rich bead embellishments that reflect elegance and tradition.",
    views: [
      {
        title: "Front View",
        stages: [
          {
            index: 1,
            title: "First Stage",
            description:
              "A separate underbust corset was constructed with eyelet openings at the back, and a pencil skirt with a zipper allowance at the back was also made independently. The two pieces were then joined together. Plain kente fabric was used for the corset, while the patterned kente was used for the pencil skirt.",
            image: "/assets/wedding-dresses/model b/1f.jpg",
          },
          {
            index: 2,
            title: "Second Stage",
            description:
              "Two bra cups were inserted into the underbust corset to form the top. The waistline of both the corset and the pencil skirt was shaped into a V at the front, then joined together with a seam. This created a V-shaped waistline at the front, while the back remained straight.",
            image: "/assets/wedding-dresses/model b/2f.jpg",
          },
          {
            index: 3,
            title: "Third Stage",
            description:
              "Additional details were added to the dress by attaching structured elements on both sides, extending from the underbust to the armhole. The underbust area was fully embellished with beads, and two beaded strips were added on each side to serve as strap sleeves. At the back, an eyelet was inserted along with a lace-up feature to replace the zipper for a better fit.",
            image: "/assets/wedding-dresses/model b/3f.jpg",
          },
        ],
      },
      {
        title: "Back View",
        stages: [
          {
            index: 1,
            title: "First Stage",
            description:
              "The back of the corset is designed with evenly spaced eyelets to accommodate a lace-up system, offering both structure and adjustability. The skirt features a clean vertical seam with space reserved for a zipper, constructed using patterned kente to maintain contrast and cohesion.",
            image: "/assets/wedding-dresses/model b/1b.jpg",
          },
          {
            index: 2,
            title: "Second Stage",
            description:
              "The corset is reinforced with bra cups, and the straight-cut back waistline contrasts the V-shape in front. The skirt’s back panel aligns seamlessly with the corset, creating a sleek, tailored line, while maintaining a comfortable fit.",
            image: "/assets/wedding-dresses/model b/2b.jpg",
          },
          {
            index: 3,
            title: "Third Stage",
            description:
              "Straps are added to the back, forming a secure and decorative lace-up closure through the eyelets. Beaded accents run down the back sides of the corset, echoing the frontal embellishments. The overall fit is fine-tuned for elegance and balance.",
            image: "/assets/wedding-dresses/model b/3b.jpg",
          },
        ],
      },
    ],
    final: {
      title: "From Sketch to Reality - The Final Masterpiece",
      desc: "This final graduation look blends modern design with cultural identity—pairing structured corsetry, V-shaped waistlines, and exquisite kente fabrics. The transformation concludes with elegant beadwork and a tailored lace-up back that elevates both form and fit.",
      video: {
        front: "/assets/wedding-dresses/model b/final1.mp4",
        back: "/assets/wedding-dresses/model b/final2.mp4",
      },
    },
  },
  {
    title: "Model C - African Print Attire for a Wedding Guest",
    description:
      "Model C is a vibrant African print ensemble crafted for elegant wedding guest appearances. Featuring a flattering bodice with a tulle yoke, flared skirt, and embellished seamlines, the design gracefully merges traditional textiles with modern techniques. The result is a lively, detailed, and celebratory look fit for special occasions.",
    views: [
      {
        title: "Front View",
        stages: [
          {
            index: 1,
            title: "First Stage",
            description:
              "The section from shoulder to waist was constructed separately from the lower part. The upper section featured a bodice with a yoke—tulle net was used for the chest area of the yoke, while African print fabric was used from the bust down to the waistline. Two princess seams were incorporated at the front and two at the back, with a zipper allowance at the back. The skirt was designed with a full 360-degree flare and also included a zipper allowance at the back.",
            image: "/assets/wedding-dresses/model c/1f.jpg",
          },
          {
            index: 2,
            title: "Second Stage",
            description:
              "The upper and lower parts were joined together with a seam. A centered zipper was inserted at the back for closure. The hem of the dress was finished using a turned-under hem technique.",
            image: "/assets/wedding-dresses/model c/2f.jpg",
          },
          {
            index: 3,
            title: "Third Stage",
            description:
              "The sleeves, designed in a cone sleeve style, were attached to the armholes of the dress. Additional details were added to the neckline and chest area where the yoke was attached. The seamlines were also embellished with beading, enhancing the overall design.",
            image: "/assets/wedding-dresses/model c/3f.jpg",
          },
        ],
      },
      {
        title: "Back View",
        stages: [
          {
            index: 1,
            title: "First Stage",
            description:
              "From the back, the yoke made of tulle gently transitions into the vibrant African print bodice, defined by two vertical princess seams. The skirt flares outward from the waist with a graceful 360-degree spread, and a zipper allowance is visibly structured into the center back.",
            image: "/assets/wedding-dresses/model c/1b.jpg",
          },
          {
            index: 2,
            title: "Second Stage",
            description:
              "The bodice and skirt were seamlessly joined at the waist. A centered zipper was inserted to secure the back closure, while the flared skirt retained its shape. The hem was smoothly turned under to achieve a neat, flowing edge from behind.",
            image: "/assets/wedding-dresses/model c/2b.jpg",
          },
          {
            index: 3,
            title: "Third Stage",
            description:
              "From the back, cone sleeves are attached neatly to the armholes, creating a dramatic silhouette. Beading was applied along the seamlines and yoke junctions, adding dimension and elevating the rear view of the design with subtle sparkle and refined finish.",
            image: "/assets/wedding-dresses/model c/3b.jpg",
          },
        ],
      },
    ],
    final: {
      title: "From Sketch to Reality - The Final Masterpiece",
      desc: "This African print masterpiece transforms traditional wedding guest wear into a celebration of structure, movement, and intricate detail. With its flared silhouette, sheer yoke, and decorative beading, the final design exudes vibrancy and sophistication for any grand occasion.",
      video: {
        front: "/assets/wedding-dresses/model c/final1.mp4",
        back: "/assets/wedding-dresses/model c/final2.mp4",
      },
    },
    finalImage: {
      frontImage: "/assets/wedding-dresses/model c/final.jpg",
    },
  },
  {
    title: "Model D - Maxi Dress for a Birthday",
    description:
      "Model D is a stylish and statement-making maxi dress designed for a birthday celebration. The ensemble features an asymmetric neckline, gathered fullness, and rich embellishments that create an elegant yet playful silhouette. From thoughtful tailoring to standout sleeve details, every element comes together in a bold celebration look.",
    views: [
      {
        title: "Front View",
        stages: [
          {
            index: 1,
            title: "First Stage",
            description:
              "The upper part features a bodice block with an asymmetric neckline, two princess seams at the front, and a V-shaped waistline. At the back, the bodice also includes two princess seams and a zipper allowance at the center back. The lower part of the dress is designed with gathered fabric for added volume.",
            image: "/assets/wedding-dresses/model d/1f.jpg",
          },
          {
            index: 2,
            title: "Second Stage",
            description:
              "Additional fullness was added to the dress by attaching another layer of gathered fabric to the hem, completing the design. A circular opening was created at the center of each shirt sleeve and finished with a frill. The sleeves were then attached to the armholes, and a zipper was inserted at the back for closure.",
            image: "/assets/wedding-dresses/model d/2f.jpg",
          },
          {
            index: 3,
            title: "Third Stage",
            description:
              "A collar was attached to the asymmetric neckline, after which the front section of the dress—from the collar area down to the neckline—was embellished with beading. The edge of the frill on the sleeve was also adorned with beads for added detail.",
            image: "/assets/wedding-dresses/model d/3f.jpg",
          },
        ],
      },
      {
        title: "Back View",
        stages: [
          {
            index: 1,
            title: "First Stage",
            description:
              "From the back, the bodice includes two princess seams that provide structure and shaping. A zipper allowance was included at the center back, and the gathered lower skirt section begins to take shape beneath a clean V-shaped waistline.",
            image: "/assets/wedding-dresses/model d/1b.jpg",
          },
          {
            index: 2,
            title: "Second Stage",
            description:
              "A second gathered layer was added to the hemline, increasing the dress’s fullness and flow. The sleeves, each featuring a circular cutout with frill edging, were attached, and the zipper was inserted down the back center for a neat closure.",
            image: "/assets/wedding-dresses/model d/2b.jpg",
          },
          {
            index: 3,
            title: "Third Stage",
            description:
              "The collar sits elegantly along the asymmetric neckline from behind. The frill edges on the sleeves were delicately beaded, adding sparkle and refinement. The back zipper is concealed within the structured seams, completing the dress’s elegant birthday-ready look.",
            image: "/assets/wedding-dresses/model d/3b.jpg",
          },
        ],
      },
    ],
    final: {
      title: "From Sketch to Reality - The Final Masterpiece",
      desc: "A fashionable birthday maxi dress brought to life with a bold neckline, flowing layers, and striking sleeve and collar details. Beaded accents add a celebratory touch, turning the outfit into a glamorous yet personalized statement for a special day.",
      video: {
        front: "/assets/wedding-dresses/model d/final1.mp4",
        back: "/assets/wedding-dresses/model d/final2.mp4",
      },
    },
  },
  {
    title: "Model E - Wedding Gown (Lace, Net & Tulle)",
    description:
      "Model E is an elegant bridal gown crafted with a fusion of lace, net, and tulle fabrics. Featuring a romantic sweetheart neckline, structured corsetry, and a dramatic back tail, this gown is meticulously designed for sophistication and charm. The transformation process celebrates fine tailoring and ornamental beauty.",
    views: [
      {
        title: "Front View",
        stages: [
          {
            index: 1,
            title: "First Stage",
            description:
              "The base of the dress was constructed with a deep sweetheart neckline at the front, featuring an overbust corset for the upper part, designed with a curved waistline. The skirt was a fitted pencil style, also shaped with a curved waistline. The overbust corset and skirt were joined together with a seam.",
            image: "/assets/wedding-dresses/model e/1f.jpg",
          },
          {
            index: 2,
            title: "Second Stage",
            description:
              "The structure is refined with careful stitching to shape the silhouette. The bodice and skirt seams are reinforced, and the form-fitting pencil style begins to contour the body. Subtle detail work starts to appear, prepping the surface for later embellishments.",
            image: "/assets/wedding-dresses/model e/2f.jpg",
          },
          {
            index: 3,
            title: "Third Stage",
            description:
              "The tulle net and its lining were gathered and attached around the lower part of the gown, adding more fullness and elegance. Beading was carefully applied to the neckline, armholes, and chest area. Additional lace details were incorporated using appliqué techniques for a romantic and luxurious finish.",
            image: "/assets/wedding-dresses/model e/3f.jpg",
          },
        ],
      },
      {
        title: "Back View",
        stages: [
          {
            index: 1,
            title: "First Stage",
            description:
              "The back neckline was kept straight with a center zipper allowance. The overbust corset and fitted pencil skirt shape the silhouette, laying the groundwork for a seamless back closure.",
            image: "/assets/wedding-dresses/model e/1b.jpg",
          },
          {
            index: 2,
            title: "Second Stage",
            description:
              "The structure was refined along the back seam, preparing for the addition of the tulle train. Seams and dart lines are smoothed out for an elegant fit across the back.",
            image: "/assets/wedding-dresses/model e/2b.jpg",
          },
          {
            index: 3,
            title: "Third Stage",
            description:
              "A dramatic tail made of gathered tulle net was attached to the back, creating a flowing, elegant silhouette. Beading was applied to the back neckline and deep sweetheart area, while lace appliqué was used to enhance the sleeves and net regions for a regal finish.",
            image: "/assets/wedding-dresses/model e/3b.jpg",
          },
        ],
      },
    ],
    final: {
      title: "From Sketch to Reality - The Final Masterpiece",
      desc: "An exquisite wedding gown transformation that combines precision construction, delicate lace appliqué, and beadwork on flowing tulle. The final look blends classic bridal elegance with contemporary flair for a captivating appearance.",
      video: {
        front: "/assets/wedding-dresses/model e/final1.mp4",
        back: "/assets/wedding-dresses/model e/final2.mp4",
      },
    },
  },
  {
    title: "Model F - Attire for a Wedding Guest",
    description:
      "Model F is a sophisticated wedding guest ensemble designed with burnt orange satin, tulle net, and lace trimmings. The outfit features a blend of structural elegance and delicate artistry, transitioning from base construction to final embellishments with precise craftsmanship.",
    views: [
      {
        title: "Front View",
        stages: [
          {
            index: 1,
            title: "First Stage",
            description:
              "Crafted from burnt orange satin, the dress begins with a structured base. The bodice is shaped with two front princess seams and a sweetheart neckline, while the pencil-style skirt is tailored with a slit at the back and a zipper allowance.",
            image: "/assets/wedding-dresses/model f/1f.jpg",
          },
          {
            index: 2,
            title: "Second Stage",
            description:
              "Three-quarter length sleeves made of tulle net are attached to the armholes. A ruched skirt panel is added at the waistline and seamlessly inserted into the side seams for volume and texture. The neckline at the back is finished with a neat binding technique.",
            image: "/assets/wedding-dresses/model f/2f.jpg",
          },
          {
            index: 3,
            title: "Third Stage",
            description:
              "The bodice is joined to the skirt with a clean seam, and the zipper is inserted at the back for closure. Final decorative detailing is applied using the appliqué method, especially around the seam lines and the ruched skirt area, enhancing elegance and allure.",
            image: "/assets/wedding-dresses/model f/3f.jpg",
          },
        ],
      },
      {
        title: "Back View",
        stages: [
          {
            index: 1,
            title: "First Stage",
            description:
              "The back structure begins with a straight neckline and princess seams. A zipper allowance is included at the center back, while the fitted pencil skirt section is shaped with a slit for movement.",
            image: "/assets/wedding-dresses/model f/1b.jpg",
          },
          {
            index: 2,
            title: "Second Stage",
            description:
              "Tulle net sleeves are attached and the ruched skirt design wraps subtly to the back. The neckline is bound cleanly to give a smooth finish and refine the silhouette.",
            image: "/assets/wedding-dresses/model f/2b.jpg",
          },
          {
            index: 3,
            title: "Third Stage",
            description:
              "The full back view is completed with the zipper neatly inserted. Intricate appliqué detailing is applied along the back seamlines and ruched elements, creating a polished, formal finish for this guest-worthy ensemble.",
            image: "/assets/wedding-dresses/model f/3b.jpg",
          },
        ],
      },
    ],
    final: {
      title: "From Sketch to Reality - The Final Masterpiece",
      desc: "A graceful transformation of satin, lace, and tulle into a head-turning guest outfit. Every seam, stitch, and embellishment contributes to a refined, celebratory look—perfect for elegant wedding attendance.",
      video: {
        front: "/assets/wedding-dresses/model f/final1.mp4",
        back: "/assets/wedding-dresses/model f/final2.mp4",
      },
    },
  },
  {
    title: "Model G - Bridal Wear for a Reception",
    description:
      "Designed for a glamorous bridal reception, Model G showcases champagne-gold lace fabric with sophisticated structural details. From the sculpted bodice to the dramatic mermaid tail, this design radiates elegance and refined craftsmanship.",
    views: [
      {
        title: "Front View",
        stages: [
          {
            index: 1,
            title: "First Stage",
            description:
              "The base takes shape using champagne-gold lace fabric. The bodice features an off-shoulder sweetheart neckline and two front princess seams, perfectly shaping the upper silhouette. The skirt is designed in a dramatic mermaid style.",
            image: "/assets/wedding-dresses/model g/1f.jpg",
          },
          {
            index: 2,
            title: "Second Stage",
            description:
              "The top and skirt are joined with a curved waist seam. Two delicate strip sleeves extend from the sweetheart neckline to the back, complementing the fitted silhouette. A zipper is inserted at the center back for closure.",
            image: "/assets/wedding-dresses/model g/2f.jpg",
          },
          {
            index: 3,
            title: "Third Stage",
            description:
              "Intricate embellishments are added along the neckline, waistline, and strip sleeves using beads. Fringed coiled shoulder structures elevate the elegance, while a quinoline insert at the hem ensures graceful flow and flair.",
            image: "/assets/wedding-dresses/model g/3f.jpg",
          },
        ],
      },
      {
        title: "Back View",
        stages: [
          {
            index: 1,
            title: "First Stage",
            description:
              "The back features a straight neckline with two princess seams and a center zipper allowance. The mermaid skirt extends into a dramatic train, emphasizing a regal bridal look.",
            image: "/assets/wedding-dresses/model g/1b.jpg",
          },
          {
            index: 2,
            title: "Second Stage",
            description:
              "The curved waist seam brings cohesion between the top and skirt. Space is allocated from shoulder to waist for an eyelet lace-up, with strip sleeves connecting the back neckline to the shoulders.",
            image: "/assets/wedding-dresses/model g/2b.jpg",
          },
          {
            index: 3,
            title: "Third Stage",
            description:
              "Finishing touches include laced eyelet holes adorned with lace trimmings and beaded embellishments on the sleeves and neckline. Fringes on the coiled structures add dramatic movement and refined charm to the back profile.",
            image: "/assets/wedding-dresses/model g/3b.jpg",
          },
        ],
      },
    ],
    final: {
      title: "From Sketch to Reality - The Final Masterpiece",
      desc: "This reception bridal wear beautifully blends structure, softness, and opulence—from golden lacework to elegant draping, resulting in a timeless couture silhouette perfect for the grand celebration.",
      video: {
        front: "/assets/wedding-dresses/model g/final1.mp4",
        back: "/assets/wedding-dresses/model g/final2.mp4",
      },
    },
  },
  {
    title: "Model H - Thanksgiving Bridal Attire",
    description:
      "Designed to blend tradition with modern elegance, Model H is a Thanksgiving bridal showpiece that gracefully combines lace fabric, delicate structure, and festive detailing into a striking bridal silhouette.",
    views: [
      {
        title: "Front View",
        stages: [
          {
            index: 1,
            title: "First Stage",
            description:
              "Crafted from rich lace fabric, the base showcases a sweetheart neckline with two front princess seams. A gently curved waistline leads into a mermaid skirt, designed with dramatic fullness at the ends and a flowing tail.",
            image: "/assets/wedding-dresses/model h/1f.jpg",
          },
          {
            index: 2,
            title: "Second Stage",
            description:
              "The bodice is seamlessly joined to the skirt, enhancing the feminine curve. Strip sleeves are delicately attached to the shoulders, and the hemline is reinforced with quinoline to add structure and graceful movement.",
            image: "/assets/wedding-dresses/model h/2f.jpg",
          },
          {
            index: 3,
            title: "Third Stage",
            description:
              "A sculpted structure is added to the left strip sleeve at the front for dramatic flair. Beaded embellishments grace the opposite sleeve, chest area, and waistline. Lacing is finalized with decorative eyelets, completing the festive transformation.",
            image: "/assets/wedding-dresses/model h/3f.jpg",
          },
        ],
      },
      {
        title: "Back View",
        stages: [
          {
            index: 1,
            title: "First Stage",
            description:
              "The back of the dress follows a gently curved silhouette with a center back zipper. The mermaid skirt flows elegantly with added fullness and a defined tail that emphasizes a dramatic bridal presence.",
            image: "/assets/wedding-dresses/model h/1b.jpg",
          },
          {
            index: 2,
            title: "Second Stage",
            description:
              "The strip sleeves wrap gently to the back shoulders. A zipper is securely fixed along the center back, while quinoline is sewn around the hem to create volume and definition.",
            image: "/assets/wedding-dresses/model h/2b.jpg",
          },
          {
            index: 3,
            title: "Third Stage",
            description:
              "Final detailing includes beadwork on the sleeves and waistline, with laced eyelets incorporated into the back for a personalized, corset-style finish that enhances the overall silhouette.",
            image: "/assets/wedding-dresses/model h/3b.jpg",
          },
        ],
      },
    ],
    final: {
      title: "From Sketch to Reality - The Final Masterpiece",
      desc: "From concept to completion, this Thanksgiving bridal piece celebrates tradition, texture, and thoughtful craftsmanship—transforming lace and structure into an elegant, seasonal showstopper.",
      video: {
        front: "/assets/wedding-dresses/model h/final1.mp4",
        back: "/assets/wedding-dresses/model h/final2.mp4",
      },
    },
  },
  {
    title: "Model I - Attire For A Wedding Guest",
    description:
      "A captivating wedding guest ensemble made from luxurious red satin, featuring intricate beadwork and dramatic puff sleeves. This dress blends sophisticated design with festive detailing, perfect for a memorable occasion.",
    views: [
      {
        title: "Front View",
        stages: [
          {
            index: 1,
            title: "First Stage",
            description:
              "The dress begins with a structured base in rich red satin. The sweetheart neckline is framed by two princess seams, which shape the bodice. A pencil skirt completes the base design, with a slit at the back to add movement.",
            image: "/assets/wedding-dresses/model i/1f.jpg",
          },
          {
            index: 2,
            title: "Second Stage",
            description:
              "The waistline is gently curved, connecting the upper and lower parts of the dress with a seamless transition. Two puff sleeves are added to the shoulders, enhancing the romantic aesthetic.",
            image: "/assets/wedding-dresses/model i/2f.jpg",
          },
          {
            index: 3,
            title: "Third Stage",
            description:
              "Beadwork is added along the princess seams and the edges of the puff sleeves, elevating the dress’s texture and detailing. These embellishments bring elegance and charm to the overall look.",
            image: "/assets/wedding-dresses/model i/3f.jpg",
          },
        ],
      },
      {
        title: "Back View",
        stages: [
          {
            index: 1,
            title: "First Stage",
            description:
              "The back features two princess seams, which echo the front’s design, creating a cohesive silhouette. A zipper allowance is placed at the center back.",
            image: "/assets/wedding-dresses/model i/1b.jpg",
          },
          {
            index: 2,
            title: "Second Stage",
            description:
              "The seams are joined seamlessly, and a zipper is inserted at the back for easy wear. The waistline remains curved, maintaining the smooth flow from front to back.",
            image: "/assets/wedding-dresses/model i/2b.jpg",
          },
          {
            index: 3,
            title: "Third Stage",
            description:
              "Eyelets are added to the back for a touch of elegance, followed by lacing that enhances the overall design, giving it a sophisticated, finished look.",
            image: "/assets/wedding-dresses/model i/3b.jpg",
          },
        ],
      },
    ],
    final: {
      title: "From Sketch to Reality - The Final Masterpiece",
      desc: "From concept to the final gown, Model I showcases the precision and artistry that go into creating a statement dress for a wedding guest, with every bead and seam meticulously crafted for a stunning effect.",
      video: {
        front: "/assets/wedding-dresses/model i/final1.mp4",
        back: "/assets/wedding-dresses/model i/final2.mp4",
      },
    },
  },
  {
    title: "Model J - Office Wear Designed With Crepe Fabric",
    description:
      "This elegant office wear, crafted from crepe fabric, goes through a meticulous process of construction—from structured darts to final detailing—blending comfort, structure, and style for the professional woman.",
    views: [
      {
        title: "Front View",
        stages: [
          {
            index: 1,
            title: "First Stage",
            description:
              "The front of the basic bodice, which forms the top, features two wedged darts extending from the waistline to the bust point. There is an opening at the center back of the top. The skirt has a center front opening, with pleats on both sides, creating a ruched effect.",
            image: "/assets/wedding-dresses/model j/1f.jpg",
          },
          {
            index: 2,
            title: "Second Stage",
            description:
              "The upper part features two wedged darts and a round neckline at the back. The skirt is designed without side seams, giving it a smooth and seamless finish. The center back seam was joined to create a ruched effect on the skirt. A button extension was added on both sides of the center front line. Finally, a shirt sleeve was attached to the armhole of the dress.",
            image: "/assets/wedding-dresses/model j/2f.jpg",
          },
          {
            index: 3,
            title: "Third Stage",
            description:
              "The neckline was finished with a classic shirt collar. Buttons were fixed along the front of the outfit, with corresponding buttonholes created. The look was completed with a matching belt made from the same fabric.",
            image: "/assets/wedding-dresses/model j/3f.jpg",
          },
        ],
      },
      {
        title: "Back View",
        stages: [
          {
            index: 1,
            title: "First Stage",
            description:
              "The back begins with a center opening at the top, balancing the front darts with subtle shaping lines. The skirt's rear view mirrors the ruched design emerging from pleats aligned with the front seams.",
            image: "/assets/wedding-dresses/model j/1b.jpg",
          },
          {
            index: 2,
            title: "Second Stage",
            description:
              "A smooth back panel is formed without side seams, enhancing the seamless silhouette. The center back seam supports a ruched effect in the skirt, while shirt sleeves bring a formal finish. Button extensions subtly echo the front for a cohesive look.",
            image: "/assets/wedding-dresses/model j/2b.jpg",
          },
          {
            index: 3,
            title: "Third Stage",
            description:
              "The shirt collar finishes off the neckline from behind, adding structure. Back buttons align with the front closure for visual harmony. The belt wraps cleanly at the waist, emphasizing the feminine silhouette from every angle.",
            image: "/assets/wedding-dresses/model j/3b.jpg",
          },
        ],
      },
    ],
    final: {
      title: "From Sketch to Reality - The Final Masterpiece",
      desc: "A polished and versatile office look brought to life—from structural darts and fabric manipulation to tailored details. Model J is a celebration of professional elegance, realized with precision and crepe fabric sophistication.",
      video: {
        front: "/assets/wedding-dresses/model j/final1.mp4",
        back: "/assets/wedding-dresses/model j/final2.mp4",
      },
    },
  },
  {
    title: "Model K - Attire For Bridal Thanksgiving",
    description:
      "Designed for a bride's thanksgiving celebration, Model K blends tradition with elegance using plain white kente. This attire evolves from a structured base to a richly embellished ensemble, combining cultural heritage with modern bridal artistry.",
    views: [
      {
        title: "Front View",
        stages: [
          {
            index: 1,
            title: "First Stage",
            description:
              "Plain white kente fabric was used for this off-shoulder attire. The upper part features three princess seams at the front—one at the center and two at the sides—with an asymmetric waistline. The skirt is a pencil style with a slit opening at the back, and a zipper is placed at the center back.",
            image: "/assets/wedding-dresses/model k/1f.jpg",
          },
          {
            index: 2,
            title: "Second Stage",
            description:
              "Boning was inserted into the seams of the princess lines to provide structure. The top and skirt were then joined with a seam, enhancing the asymmetric effect of the waistline.",
            image: "/assets/wedding-dresses/model k/2f.jpg",
          },
          {
            index: 3,
            title: "Third Stage",
            description:
              "Details were added to the fabric by beading along the kente lines, waistline, and princess seams, as well as attaching a structured design to the shoulder area of the outfit. Crystals were then added to the structure to further embellish the look. At the back, eyelet holes were created and laced to complete the design.",
            image: "/assets/wedding-dresses/model k/3f.jpg",
          },
        ],
      },
      {
        title: "Back View",
        stages: [
          {
            index: 1,
            title: "First Stage",
            description:
              "The back showcases the beginning of a clean off-shoulder silhouette with visible princess seams mirroring the front. A pencil-style skirt includes a neatly positioned center back zipper and a subtle slit for movement.",
            image: "/assets/wedding-dresses/model k/1b.jpg",
          },
          {
            index: 2,
            title: "Second Stage",
            description:
              "Boning is inserted into the princess seams for structure, offering a sculpted fit along the back. The asymmetry of the waistline is enhanced after the top and skirt are joined seamlessly.",
            image: "/assets/wedding-dresses/model k/2b.jpg",
          },
          {
            index: 3,
            title: "Third Stage",
            description:
              "Eyelet holes are delicately placed and laced at the back, adding both design flair and functionality. Crystal embellishments and structured shoulder accents extend around for a cohesive, radiant finish.",
            image: "/assets/wedding-dresses/model k/3b.jpg",
          },
        ],
      },
    ],
    final: {
      title: "From Sketch to Reality - The Final Masterpiece",
      desc: "From carefully placed princess seams to shimmering crystal embellishments, this thanksgiving bridal attire merges craftsmanship and cultural elegance into a gracefully modern silhouette worthy of a bride's special celebration.",
      video: {
        front: "/assets/wedding-dresses/model k/final1.mp4",
        back: "/assets/wedding-dresses/model k/final2.mp4",
      },
    },
  },
  {
    title: "Model L - Attire For Wedding",
    description:
      "Crafted from beaded lace and sky blue crepe, Model L is a modern, elegant wedding outfit. Its transformation captures the blend of detailed craftsmanship and stylish silhouette tailored for a bride's special day.",
    views: [
      {
        title: "Front View",
        stages: [
          {
            index: 1,
            title: "First Stage",
            description:
              "Beaded lace fabric with sequins and plain sky blue crepe fabric were used for this design. Bra cups were attached to an underbust corset, with boning inserted along the star seams to structure the corset. The upper part features a sweetheart neckline, while the skirt is a pencil style, with lace fabric at the front and crepe fabric serving as lining. The lower part of the crepe fabric is shaped into a V-shape at the skirt.",
            image: "/assets/wedding-dresses/model l/1f.jpg",
          },
          {
            index: 2,
            title: "Second Stage",
            description:
              "A yoke was attached to the top at the chest area. The waistline was shaped into a V-shape for both the top and skirt, after which they were joined together. 3/4 sleeves made of tulle net were then attached to the armholes.",
            image: "/assets/wedding-dresses/model l/2f.jpg",
          },
          {
            index: 3,
            title: "Third Stage",
            description:
              "The lines in the upper part of the outfit, including the sweetheart neckline, were embellished with beads to add glamour. The look is now complete, merging structural elegance with decorative finesse.",
            image: "/assets/wedding-dresses/model l/3f.jpg",
          },
        ],
      },
      {
        title: "Back View",
        stages: [
          {
            index: 1,
            title: "First Stage",
            description:
              "The corset back features visible boning channels and an eyelet space at the upper section. The pencil skirt has a zipper extension allowance at the center back, ending in a slit opening for comfort and style.",
            image: "/assets/wedding-dresses/model l/1b.jpg",
          },
          {
            index: 2,
            title: "Second Stage",
            description:
              "A yoke was added to the back, matching the chest front. The waistline was contoured into a graceful V-shape, and the top and skirt were neatly joined. Sheer 3/4 tulle sleeves were also attached at this point.",
            image: "/assets/wedding-dresses/model l/2b.jpg",
          },
          {
            index: 3,
            title: "Third Stage",
            description:
              "An eyelet was inserted at the back with delicate lacing added to finish the look. Bead embellishments accentuate the upper back and neckline, tying together a sophisticated and cohesive bridal ensemble.",
            image: "/assets/wedding-dresses/model l/3b.jpg",
          },
        ],
      },
    ],
    final: {
      title: "From Sketch to Reality - The Final Masterpiece",
      desc: "This bridal outfit is a celebration of detail—from a structured corset to shimmering lace and netted sleeves. A graceful blend of soft tulle, elegant beading, and tailored shaping defines this complete wedding look.",
      video: {
        front: "/assets/wedding-dresses/model l/final1.mp4",
        back: "/assets/wedding-dresses/model l/final2.mp4",
      },
    },
  },
];
