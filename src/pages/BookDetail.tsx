import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Calendar, BookOpen } from "lucide-react";

interface BookDetails {
  id: string;
  title: string;
  year: number;
  cover: string;
  synopsis: string;
  pages: number;
  genre: string[];
  amazonUrl: string;
  publisherUrl: string;
  series?: string;
  awards?: string[];
}

const BookDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Mock book data - in a real app, this would come from an API
  const getBookDetails = (bookId: string): BookDetails | null => {
    const books: Record<string, BookDetails> = {
     "carrie": {
  id: "carrie",
  title: "Carrie",
  year: 1974,
  cover: "/book-carrie.jpg",
  synopsis: "Carrie White, a shy and friendless teenager, discovers she has telekinetic powers. When her classmates play a cruel prank on her at the senior prom, Carrie's suppressed rage is unleashed in a horrifying display of her supernatural abilities. King's debut novel explores themes of bullying, religious fanaticism, and the destructive power of adolescent cruelty. This groundbreaking work established King as a master of psychological horror and launched one of the most successful writing careers in modern literature.",
  pages: 199,
  genre: ["Horror", "Supernatural", "Coming-of-age"],
  amazonUrl: "https://www.amazon.co.uk/Carrie-Stephen-King-ebook/dp/B0037TPMOU/ref=sr_1_1?crid=1EALU93MXBAAL&dib=eyJ2IjoiMSJ9.VyX34fJGH0RIY5mAY2NagTU_8p-rkLXazT1hIBNRthDFg2zn_eUyzUtrsZioV1L8G-ZVgKV8koHw_HZnzOVN_vcEZZtUicMzTvf8fY0Th223yeK25PhwPpnqQlTsBjN_XgsVYawKPgLxHDnvh6Hqk2LU2EJVFHoDiTKkCfyUwInfar2jiZQCDILQaAYo_ooEb8FcVbX80L4acYiTVcoy71Dt675A9J6O3xLNEeMRXwE.mgtZw9Pu1YHRhtTIqZ5dk0eKY0NvM3rx4atcQB0xqfY&dib_tag=se&keywords=Carrie&qid=1756459218&s=books&sprefix=carrie%2Cstripbooks%2C373&sr=1-1",
  publisherUrl: "https://doubleday.com/carrie",
  awards: ["Debut Novel of the Year"]
},
"salems-lot": {
  id: "salems-lot",
  title: "'Salem's Lot",
  year: 1975,
  cover: "/book-salems-lot.jpg",
  synopsis: "When acclaimed writer Ben Mears returns to his hometown of Jerusalem's Lot, he finds the town slowly succumbing to a malevolent presence. A vampire has infiltrated the community, preying on the unsuspecting residents and spreading darkness. As Mears investigates, he gathers allies to confront the evil, revealing the hidden fears and complicity of the townspeople. King's gothic horror explores the fragility of human morality, the contagious nature of evil, and the struggle of ordinary people facing extraordinary darkness.",
  pages: 439,
  genre: ["Horror", "Gothic", "Supernatural"],
  amazonUrl: "https://www.amazon.co.uk/Salems-Lot/dp/B002SQ9776/ref=sr_1_1?crid=2XV1Q2TP64FLK&dib=eyJ2IjoiMSJ9.bJorFl7LQ9_Wz5H6KTWUKCzs0iXorRsfV0oSk2oSdcWDJTwE4Mm3SXZwplD5fakAD5axbtlUKWyhgRDobL6NDeQFltpc9BhZGh9FODownAyQGdFO3Ph68Cnj65PBKkdBmt8L2BlwxxA4yIpP_FNUYiDR49IcT9PiGaQdxWgVtn_H19ZTuYPrqtoIrnEmIaHbakYtgfetPJK70mhgqkrlUz4QcPl-QaHP91atD1nQD5E.7zaMJUbRHEA_T4bf3BD9UcJ_rsKrpR30y_YJpw2zC3U&dib_tag=se&keywords=Salem%27s+Lot&qid=1756461662&s=books&sprefix=salem%27s+lot%2Cstripbooks%2C198&sr=1-1",
  publisherUrl: "https://doubleday.com/salems-lot",
  awards: ["Locus Award Nominee"]
},
"the-shining": {
  id: "the-shining",
  title: "The Shining",
  year: 1977,
  cover: "/book-the-shining.jpg",
  synopsis: "Jack Torrance, an aspiring writer and recovering alcoholic, accepts a position as winter caretaker of the remote Overlook Hotel, bringing along his wife Wendy and son Danny. Danny possesses 'the shining,' a psychic ability that exposes him to the hotel's dark history and malevolent forces. As isolation deepens, Jack’s sanity deteriorates, and supernatural influences push him toward violence. King examines isolation, family tension, and the fragility of the human mind in a chilling psychological horror tale that has become a classic of the genre.",
  pages: 447,
  genre: ["Horror", "Psychological Thriller", "Supernatural"],
  amazonUrl: "https://www.amazon.co.uk/The-Shining/dp/B008RZN0YI/ref=sr_1_1?crid=3NABX4R0DY78B&dib=eyJ2IjoiMSJ9.XxpoDTN-nZL6SYXl9YVEFC2k5dxqLFDB5OIR2AeyT6cWtKLs1-qU0acQhA9c4qJzm9H3GKfO_xSg9KYK5VkHKOEAYrgNbPI3UOTEQUh-ImnPO2g-YQbYyLKD40_9UeKl6uCj1HqO4f5i2vy8N4FGyce_cQRDM6z1WZjBJ5Yh9FlUwu8BoT1QBDeB4qiiaslMa4TgnQ1B2DuWOj9QcYNoxzXtDCGxqNKLW3auqguM4Ho.5LeimyJMA5JyfG5hDL2HfMBCecUtPPlt6K3eoatOI_g&dib_tag=se&keywords=the+shining&qid=1756459700&s=books&sprefix=the-shining%2Cstripbooks%2C250&sr=1-1",
  publisherUrl: "https://doubleday.com/shining",
  awards: ["World Fantasy Award Nominee"]
},
"the-stand": {
  id: "the-stand",
  title: "The Stand",
  year: 1978,
  cover: "/book-the-stand.jpg",
  synopsis: "A deadly superflu wipes out nearly all of humanity, leaving survivors to choose between good and evil. Mother Abagail, a kind and spiritual woman, leads one group toward rebuilding society, while Randall Flagg, a dark, charismatic figure, gathers followers to sow chaos. As the two sides prepare for the ultimate confrontation, ordinary people are forced to confront morality, fear, and the meaning of survival. King's epic post-apocalyptic saga weaves together heroism, horror, and the enduring struggle between light and darkness.",
  pages: 1152,
  genre: ["Horror", "Apocalyptic", "Epic", "Fantasy"],
  amazonUrl: "https://www.amazon.co.uk/The-Stand/dp/B008MZT1V4/ref=sr_1_1?crid=1TDACV3PIZBVT&dib=eyJ2IjoiMSJ9.KQC9ww_RQXwUmfbYDwJlbvRfDiCrZdx9vlzF0tAxIPpuWaGjvy5mM04EaKMzeQPZwUs2lXm_VK2eJAbb0Seu-FVpHfEltvWHo53aqMBcx_I3GhRYdSbdtoQxHDNUG0pjS7si9v2_GfwaRJanFdQCLbfdHrm7aqg_pRuuL3gGKrgQmq3xy-Ml8D3nBUgWUCw3wvmhWDA0KtK7IGuDSHapLslyUtVGJYgTPX7r-qVNdaw.DM-mM-4eoo-cXeRhrtG_yXRzSFu73qnvlmSx_xd06Xo&dib_tag=se&keywords=The+Stand&qid=1756461727&s=audible&sprefix=the+stand%2Caudible%2C363&sr=1-1",
  publisherUrl: "https://doubleday.com/the-stand",
  awards: ["World Fantasy Award Nominee"]
},
"the-dead-zone": {
  id: "the-dead-zone",
  title: "The Dead Zone",
  year: 1979,
  cover: "/book-the-dead-zone.jpg",
  synopsis: "Johnny Smith awakens from a five-year coma to discover he has psychic abilities that reveal people's pasts and futures. Initially overwhelmed, he gradually learns to use his powers for good. When he foresees a politician's rise to catastrophic power, Johnny faces a moral dilemma: intervene or let destiny run its course. This gripping thriller blends suspense, supernatural elements, and ethical inquiry, exploring the heavy burden of knowing the future and the consequences of action and inaction.",
  pages: 428,
  genre: ["Horror", "Thriller", "Supernatural"],
  amazonUrl: "https://www.amazon.co.uk/The-Dead-Zone/dp/B01JAOTQDS/ref=sr_1_1?crid=CBQK9RQ1K9ZV&dib=eyJ2IjoiMSJ9.A10Zm_F8NqVNXtTbuRAYNw.2qYF0mrKFm7HSCK-AN1Iy4puO7tTk_35ENBh9uBY0eE&dib_tag=se&keywords=The+Dead+Zone+1979+428+pages&qid=1756461770&s=audible&sprefix=the+dead+zone+1979+428+pages%2Caudible%2C238&sr=1-1",
  publisherUrl: "https://viking.com/dead-zone",
  awards: []
},
"firestarter": {
  id: "firestarter",
  title: "Firestarter",
  year: 1980,
  cover: "/book-firestarter.jpg",
  synopsis: "Charlie McGee, a young girl, develops pyrokinesis as a side effect of a secret government experiment on her parents. Hunted relentlessly by the sinister agency known as 'The Shop,' Charlie must navigate a world where she cannot trust anyone, learn to control her destructive powers, and confront the dangers that threaten both her life and the lives of those she loves. King combines suspense, government conspiracy, and supernatural ability in a tense and thrilling exploration of innocence, power, and survival.",
  pages: 426,
  genre: ["Horror", "Science Fiction", "Thriller"],
  amazonUrl: "https://www.amazon.co.uk/Firestarter/dp/B008MZT2RW/ref=sr_1_1?crid=2H32RIDGF4S7C&dib=eyJ2IjoiMSJ9.co2UWDunE2Wt-NsE1ny2HBxva4SxeBBbv_ELB0Bwok7WPyom9NwzKHCKUAx6Q9tl-Y3mVepMuoqITBk3rBdGMSClUSG7YZw1UwabU7x1pEDQBdSD-oCeY96owEof1JUo5AXOBKbfLFhbJkkbYEwjWGEIlydVz3GSqWnmxnJDldTZesOAg4J0jq8zHqz1R8FCL4yZLr0bKkgRZ47Py-Rc6yZ0r0C9ibQ..&dib_tag=se&keywords=Firestarter&qid=1756461895&s=books&sprefix=firestarter%2Cstripbooks%2C221&sr=1-1",
  publisherUrl: "https://viking.com/firestarter",
  awards: []
},
"cujo": {
  id: "cujo",
  title: "Cujo",
  year: 1981,
  cover: "/book-cujo.jpg",
  synopsis: "Cujo, a once-friendly St. Bernard, contracts rabies and becomes a relentless killing machine. Trapped in their broken-down car during a sweltering summer, mother Donna Trenton and her young son Tad must face the terror of the infected dog. King's tense psychological horror explores fear, helplessness, and the primal instincts that emerge when ordinary life is suddenly threatened by an unimaginable danger.",
  pages: 319,
  genre: ["Horror", "Thriller", "Psychological"],
  amazonUrl: "https://www.amazon.co.uk/Cujo/dp/B01H0KXCZW/ref=sr_1_1?crid=MEAB1AUSOV94&dib=eyJ2IjoiMSJ9.O6_VuxE555zbWUGf2UYN8UOxYiV6jK0Nr443zm4352nJOapiNnTheP0LUexGGeQs8EH33VvhI8CYpUuXeUxAnOL_8FIZ8W7G52DNVhST1gw.xDZODSqQZwZ7Tv13cM1r9dLhEKTufWNF3xZxtDvyjso&dib_tag=se&keywords=cujo&qid=1756461903&s=audible&sprefix=cujo%2Caudible%2C261&sr=1-1",
  publisherUrl: "https://viking.com/cujo",
  awards: []
},
"the-dark-tower": {
  id: "the-dark-tower",
  title: "The Dark Tower: The Gunslinger",
  year: 1982,
  cover: "/book-dark-tower-1.jpg",
  synopsis: "Roland Deschain, the last gunslinger in a world that has 'moved on,' pursues the elusive Man in Black across a desert wasteland. Along the journey, he encounters strange towns, mystical forces, and dangerous creatures, revealing a multiverse connected to King's other works. This first installment of the Dark Tower series combines fantasy, westerns, and science fiction in an epic tale of obsession, destiny, and the relentless quest for the mysterious Dark Tower at the center of all worlds.",
  pages: 231,
  genre: ["Fantasy", "Western", "Science Fiction", "Adventure"],
  amazonUrl: "https://www.amazon.co.uk/Dark-Tower-Gunslinger-Stephen-King/dp/1444723448",
  publisherUrl: "https://grant.com/dark-tower",
  series: "The Dark Tower",
  awards: ["World Fantasy Award Nominee"]
},
"christine": {
  id: "christine",
  title: "Christine",
  year: 1983,
  cover: "/book-christine.jpg",
  synopsis: "Arnie Cunningham, a shy teenager, purchases a vintage 1958 Plymouth Fury named Christine. The car is possessed with a malevolent spirit that gradually changes Arnie, causing him to isolate from friends and family while driving him toward obsession and violence. As Christine's power grows, it becomes a deadly force capable of revenge. King’s supernatural horror novel explores themes of obsession, possession, and the corrupting influence of unchecked desires.",
  pages: 526,
  genre: ["Horror", "Supernatural", "Coming-of-age"],
  amazonUrl: "https://www.amazon.co.uk/Christine/dp/B01H0KJ1R0/ref=sr_1_1?crid=ZUP5UK9O5GNN&dib=eyJ2IjoiMSJ9.EV3jKmSFu2XASKyaLpt8RPMgVzBF99SklqFmKSZDqoEgiHsUlTp34jThOrrDu2yWHzNIHWBRfsHRqU7SSXq7HEJM4QNRoQQRII77qca-CnOzVUtUjDGXtsCRuVOWz6kBF9F6Gd0emZ2Sfg1z54lQZK5Gb6ufrwxGmmXD7glumsZoeWPE8sEHLl3NNeaPR_FM7icay3TmTPU1aobAHNVsiBidPbzovwEtgoYkNSXaJh4.5OrIfuPiHTJA0YM5LKMfSfRRAY5C0Ga8Vri7BcNlXCM&dib_tag=se&keywords=christine&qid=1756463243&s=audible&sprefix=christine%2Caudible%2C230&sr=1-1",
  publisherUrl: "https://viking.com/christine",
  awards: []
},
"pet-sematary": {
  id: "pet-sematary",
  title: "Pet Sematary",
  year: 1983,
  cover: "/book-pet-sematary.jpg",
  synopsis: "The Creed family moves to rural Maine and discovers a mysterious pet cemetery behind their home. Beyond it lies an ancient burial ground with the power to resurrect the dead—but what returns is never the same. After tragedy strikes, Louis Creed confronts the horrific consequences of trying to cheat death. King’s most frightening novel examines grief, loss, and the moral and supernatural costs of defying nature.",
  pages: 374,
  genre: ["Horror", "Supernatural", "Psychological"],
  amazonUrl: "https://www.amazon.co.uk/Pet-Sematary/dp/B0799Y9SHX/ref=sr_1_1?crid=5VXNFS2SU7M&dib=eyJ2IjoiMSJ9.4at_kO8cOqOqSpU0gEZ-ehTvJ2vcGGmzRW1gR2XouMM.EsjVlivVxySUUnTXjQ7y43C54MYxvxNU39aZF2m0mMw&dib_tag=se&keywords=pet-sematary&qid=1756463171&s=audible&sprefix=pet-sematary%2Caudible%2C299&sr=1-1",
  publisherUrl: "https://doubleday.com/pet-sematary",
  awards: []
},
"the-talisman": {
  id: "the-talisman",
  title: "The Talisman",
  year: 1984,
  cover: "/book-the-talisman.jpg",
  synopsis: "Twelve-year-old Jack Sawyer embarks on a perilous quest to save his dying mother by finding a mystical talisman that spans both our world and the parallel Territories. Facing magical creatures, malevolent forces, and moral dilemmas, Jack grows from a boy into a hero. Co-written with Peter Straub, King weaves a dark fantasy adventure that explores courage, the loss of innocence, and the enduring strength of love and determination.",
  pages: 646,
  genre: ["Fantasy", "Adventure", "Coming-of-age", "Dark Fantasy"],
  amazonUrl: "https://www.amazon.co.uk/The-Talisman-Book-1/dp/B002SPZOYC/ref=sr_1_1?crid=2EJBOQOSJSNN&dib=eyJ2IjoiMSJ9.zdEm-jc54jAd3wAkebL1sPe7tg2pSeqAg5ZRh_NAs_0c4zcoH8Ct_lNHwf9b99C3viXJ7yzcqhPGL6rnzsrG18Ps50DM24LtS8BD5djUb61aFY56kmlveHQZOhxxff8mWVA3SfuGvwsmWxL-f5KiQDZkEmdUcCHri02RFS5f6vhx_NtDK6eha-ECFmrtGphI8RW72X8_ute5BZTHBhbjNGf0rmR_e5UAI-yha7pxTrA.4HKnmuA9iojmIONG57NUmt2r2OG_uMkVaJlQO8ZF9fs&dib_tag=se&keywords=The+Talisman&qid=1756463127&s=audible&sprefix=the+talisman%2Caudible%2C236&sr=1-1",
  publisherUrl: "https://random-house.com/talisman",
  awards: []
},
"it": {
  id: "it",
  title: "It",
  year: 1986,
  cover: "/book-it.jpg",
  synopsis: "In Derry, Maine, seven outcast children form 'The Losers Club' to confront a shape-shifting entity, Pennywise, who exploits fear to feed on the town’s residents. Twenty-seven years later, the group reunites to face the evil once more. King's epic novel intertwines supernatural horror, childhood trauma, and the complexities of memory, exploring how the past shapes adulthood and how courage, friendship, and resilience can confront unimaginable evil.",
  pages: 1138,
  genre: ["Horror", "Coming-of-age", "Supernatural", "Epic"],
  amazonUrl: "https://www.amazon.co.uk/It/dp/B01H0IF7MA/ref=sr_1_1?crid=5ET1WIO304UJ&dib=eyJ2IjoiMSJ9.WiBhl97Fa4nbzLJUqUxOAmQIBDKPsj3INM9lJs1CWWsPM5546O-JQaaDXb0a4X1OShYHmMB5uPaLXJQ0pZJoDWPqcOeL6BLP9jEWbBubYZ-kbwBdjekID7y0Q8MzU1jZ_kbO1X6O1QIO4AmD3bnqJDvA_tF2Eta_sjgFwiJGNw0eafFP_JK2iFWLTBBx0sF9TZSyns9gWxi37o1zl_hGYtqdmByIUgT3VADH1qZyuOw.rf2yFGsL3DqIpbr9AfSDQ-jJt8itCGnKOnD27hR_qhA&dib_tag=se&keywords=It&qid=1756459460&s=audible&sprefix=it+%2Caudible%2C176&sr=1-1",
  publisherUrl: "https://viking.com/it",
  awards: ["British Fantasy Award", "World Fantasy Award Nominee"]
},
"misery": {
  id: "misery",
  title: "Misery",
  year: 1987,
  cover: "/book-misery.jpg",
  synopsis: "Bestselling author Paul Sheldon is rescued from a car crash by Annie Wilkes, a devoted yet dangerously unstable fan. When she discovers Paul has killed off her favorite character, she holds him captive, forcing him to write a new novel under threat of violence. King explores obsession, the nature of fandom, and the terrifying power imbalance between creator and admirer in this claustrophobic psychological horror novel.",
  pages: 310,
  genre: ["Horror", "Psychological Thriller", "Suspense"],
  amazonUrl: "https://www.amazon.co.uk/Misery/dp/B01FG79HPA/ref=sr_1_1?crid=2RWDN39688JPK&dib=eyJ2IjoiMSJ9.6Rl2HsGODQ_KPeYP5xbv-GrSQzV1sl6fF6ikMJIeU1_tvjokjhK_GtftQUJvbd-QEZ9rNcBQAEgNA676o34gNWji3RE36DZtdI2DwTI62f3QY62DxGO70JwQyDdHAsa72YLEaUKi1tXou1CsaCC259v1MKoQcZWxX--exCrJOqQttmok5CZ7D0WbSyfz4oIOEiMi6RuPuKyEhSfTxuWppMNHP6tZn-oFL-8Q-nvlbdI.A86DVG4pNXIB7Ey44VtlsMM8TfR6Ehn7Dp-bBuUX9pw&dib_tag=se&keywords=%22misery&qid=1756463039&s=audible&sprefix=misery%2Caudible%2C390&sr=1-14",
  publisherUrl: "https://viking.com/misery",
  awards: ["Bram Stoker Award"]
}
,
      "the-tommyknockers": {
        id: "the-tommyknockers",
        title: "The Tommyknockers",
        year: 1987,
        cover: "/book-tommyknockers.jpg",
        synopsis: "When Bobbi Anderson discovers a strange metal object buried in the woods behind her home, it begins to change her and the entire town of Haven, Maine. The alien artifact grants incredible technological abilities but at a horrifying cost - the townspeople are being gradually replaced by something inhuman. Only Bobbi's friend Jim Gardener, protected by a metal plate in his head, can see what's really happening in this science fiction horror tale.",
        pages: 558,
        genre: ["Science Fiction", "Horror", "Alien Invasion"],
        amazonUrl: "https://www.amazon.co.uk/The-Tommyknockers/dp/B01H0IEI8Y/ref=sr_1_1?crid=1J5N5U3ITEZT2&dib=eyJ2IjoiMSJ9.XD43rf9MGu1rDjK96NBHhgNbetg6CewZHMwhJvQ0TsvGjHj071QN20LucGBJIEps.nqr8F-JENwkX2qUX06kXX_fNtzPMIX66vjekmTpZJb4&dib_tag=se&keywords=the-tommyknockers&qid=1756463013&s=audible&sprefix=the-tommyknockers%2Caudible%2C180&sr=1-1",
        publisherUrl: "https://putnam.com/tommyknockers"
      },
      "the-dark-half": {
        id: "the-dark-half",
        title: "The Dark Half",
        year: 1989,
        cover: "/book-the-dark-half.jpg",
        synopsis: "Writer Thad Beaumont decides to kill off his pseudonym George Stark, who writes violent crime novels. But George Stark refuses to stay dead and begins murdering people connected to Thad's decision to end their partnership. As the body count rises, Thad must confront his dark alter ego in a battle for survival. This psychological horror novel explores the duality of human nature and the dangerous power of the written word.",
        pages: 431,
        genre: ["Horror", "Psychological Thriller", "Supernatural"],
        amazonUrl: "https://www.amazon.co.uk/The-Dark-Half/dp/B01H0KA8GS/ref=sr_1_1?crid=25HMTJ23ZMR3B&dib=eyJ2IjoiMSJ9.or8lLePW6HV4IDUjyY7tqS51USZEyiGe1UYF8F5CklBZIMRE8384C2DrpiXDntG0EUrIxBcvKeH08O1lgJAyDJQb8iYQgLPgcJdHfW0LoHiCgxR0a_isI3RktTZJn_28CgDsOKjFAij92X0zIA4MauDC7CwVwp23hjBsy3HpxKHuHR7D9nqIQrGQdJfwM7qOWaNTtyI3Q9AQwoTYIa_GwnCkMp9YXqm6_qwgVdHkcE4.t94iLW5ZWuBSknu1z2dAvdRw0ZWxozfcFtXJ0I5ol9A&dib_tag=se&keywords=the-dark-half&qid=1756462957&s=audible&sprefix=the-dark-half%2Caudible%2C169&sr=1-1",
        publisherUrl: "https://viking.com/dark-half"
      },
      "needful-things": {
        id: "needful-things",
        title: "Needful Things",
        year: 1991,
        cover: "/book-needful-things.jpg",
        synopsis: "A mysterious shop called Needful Things opens in Castle Rock, Maine, run by the enigmatic Leland Gaunt. Everyone who visits finds exactly what they've always wanted - but the price isn't money. Instead, Gaunt asks for small favors that gradually turn neighbor against neighbor until the entire town erupts in violence. This novel serves as the explosive finale to King's Castle Rock cycle.",
        pages: 690,
        genre: ["Horror", "Supernatural", "Psychological"],
        amazonUrl: "https://www.amazon.co.uk/Needful-Things/dp/B00943CBT2/ref=sr_1_1?crid=1CB6WHPSJDW03&dib=eyJ2IjoiMSJ9.2mlsDFOo5OZ7lKYne4O9u16IPWdRzbHUpTKjIN6k31TFWrsRMyck6i9X--ieN3Mw.OTO7gnY4ty6JR9pqrbAIhLRtHU50I8iAhGa5YDusmmo&dib_tag=se&keywords=needful-things&qid=1756462930&s=audible&sprefix=needful-things%2Caudible%2C316&sr=1-1",
        publisherUrl: "https://viking.com/needful-things"
      },
      "geralds-game": {
        id: "geralds-game",
        title: "Gerald's Game",
        year: 1992,
        cover: "/book-geralds-game.jpg",
        synopsis: "Jessie Burlingame and her husband Gerald travel to their remote lake house for a romantic getaway. When their kinky game goes wrong and Gerald dies of a heart attack, Jessie finds herself handcuffed to the bed with no hope of rescue. As she struggles to survive, she must confront her deepest fears and traumatic memories. This claustrophobic psychological horror explores trauma, survival, and inner strength.",
        pages: 332,
        genre: ["Horror", "Psychological Thriller", "Survival"],
        amazonUrl: "https://www.amazon.co.uk/Geralds-Game/dp/B01H0IF5DG/ref=sr_1_1?crid=3GWLZCXOA89RG&dib=eyJ2IjoiMSJ9.Oc9kQe3chhhwd3N-WJr3SFOnfhlIJugbBokQulnKsmAkCeizdxehdjsI9oeJIPcI7uHhtniYt6LfTE7LDX2ddlJpE-JVFu9JqqN6N5huxuEuIH_qHGmt0XC1yRnZHbG6pXlSqcD2S6Cd3tml6-jzbw.6jEp3-uOCIkDSWJr9PSgf8Lplrm9JPfxejVQu4aijEU&dib_tag=se&keywords=geralds-game&qid=1756462891&s=books&sprefix=geralds-game%2Cstripbooks%2C223&sr=1-1",
        publisherUrl: "https://viking.com/geralds-game"
      },
      "dolores-claiborne": {
        id: "dolores-claiborne",
        title: "Dolores Claiborne",
        year: 1992,
        cover: "/book-dolores-claiborne.jpg",
        synopsis: "Dolores Claiborne is accused of murdering her wealthy employer, Vera Donovan. In her confession to police, Dolores reveals the truth about her life on Little Tall Island, including her abusive marriage and a dark secret from thirty years ago during a total solar eclipse. This psychological thriller is told entirely through Dolores's voice as she recounts decades of struggle, survival, and the lengths a mother will go to protect her children.",
        pages: 305,
        genre: ["Thriller", "Psychological", "Crime"],
        amazonUrl: "https://www.amazon.co.uk/s?k=Dolores+Claiborne&i=audible&crid=3LK04RSZWJDKA&sprefix=dolores+claiborne%2Caudible%2C389&ref=nb_sb_noss_2",
        publisherUrl: "https://viking.com/dolores-claiborne"
      },
      "insomnia": {
        id: "insomnia",
        title: "Insomnia",
        year: 1994,
        cover: "/book-insomnia.jpg",
        synopsis: "Ralph Roberts begins suffering from insomnia after his wife's death, and as his sleeplessness deepens, he starts seeing things others cannot - including aura-like colors around people and strange beings that exist just beyond normal perception. Ralph discovers he's been chosen to prevent a catastrophic event that could affect the balance between Purpose and Random in the universe. This novel connects to King's Dark Tower mythology.",
        pages: 663,
        genre: ["Horror", "Fantasy", "Supernatural", "Dark Tower"],
        amazonUrl: "https://www.amazon.co.uk/Insomnia/dp/B01I5FI026/ref=sr_1_2?crid=2M8US5P6SNDN5&dib=eyJ2IjoiMSJ9.7CeQ3PvGqGxOY_N-smagg9MoBjHY4y7xwzFZj2RejZ72preanN7HssM-Ykc921_izX1udYclqhkAGqDPgYzyT_Da-v6P1rDwKX-tzuwfpjtB0IswPlGYOm_QQepScif7GqRr7bVYkE-l7QgLDvRK-9Vf9mRGpX63ZbIGNm4YYCXSvtZ_2aDhSw2Vx62pgIfNWn1z6xnu9wbkFto6qtm7YyYpiMdwkqgpLI7HETBy40E.9fMA-ZsqbMD5Yd4eO_I3cx1ckPDY16Nr30goHegpRJI&dib_tag=se&keywords=insomnia&qid=1756463365&s=books&sprefix=insomnia%2Cstripbooks%2C181&sr=1-2",
        publisherUrl: "https://viking.com/insomnia"
      },
      "rose-madder": {
        id: "rose-madder",
        title: "Rose Madder",
        year: 1995,
        cover: "/book-rose-madder.jpg",
        synopsis: "After fourteen years of abuse, Rose Daniels finally escapes her violent police officer husband Norman. She flees to a distant city where she tries to build a new life, but Norman is relentlessly hunting her down. When Rose buys a strange painting at a pawn shop, she discovers it's a portal to another world where she might find the strength to finally confront her tormentor. This dark fantasy combines domestic abuse themes with supernatural elements.",
        pages: 420,
        genre: ["Horror", "Dark Fantasy", "Psychological Thriller"],
        amazonUrl: "https://www.amazon.co.uk/Rose-Madder/dp/B004V9FNVW/ref=sr_1_1?crid=3EUFT1W6VVDV9&dib=eyJ2IjoiMSJ9.ZDP3E49LNKIEQDiX74f5mg.QOr87WdSSG5gyDRt0kvzLBSdZXs7dsjUaunyMIViAII&dib_tag=se&keywords=rose-madder&qid=1756463401&s=audible&sprefix=rose-madder%2Caudible%2C248&sr=1-1",
        publisherUrl: "https://viking.com/rose-madder"
      },
      "the-green-mile": {
        id: "the-green-mile",
        title: "The Green Mile",
        year: 1996,
        cover: "/book-the-green-mile.jpg",
        synopsis: "Set in 1932 on death row at Cold Mountain Penitentiary, this story follows prison guard Paul Edgecombe and the inmates on 'the green mile' - the path to the electric chair. When John Coffey, a giant black man convicted of murdering two young girls, arrives, Paul discovers that Coffey possesses miraculous healing powers. This powerful tale examines justice, mercy, and the presence of divine grace in the darkest places.",
        pages: 432,
        genre: ["Fantasy", "Drama", "Historical Fiction", "Supernatural"],
        amazonUrl: "https://www.amazon.co.uk/The-Green-Mile/dp/B002SQCX22/ref=sr_1_1?crid=CSHNU35RVYAN&dib=eyJ2IjoiMSJ9.byb18ja4uHgS8Y1P93VtlLuSnFZx4860EA0LxBncrIQSxmAZpRYp--fQaRCnlcAvPWB-nVevIkDo_rrQOlNs5oiIZZC8yRISZi5ZrbPkO3_A4xA0BlMHta9gc3lx3BXcxufvH2GhofFjx53CBkHC5iRk7uBNPkoA868kG4vlddTXtMqZB9bS5gLwNfrYwKwSuasf86vBHvknoizzAR3GEnCbFl1gFUtn6S2dfKhECL8.O1ta6BDs2038pdsobujhIk-moKs7n05FYEchJck--7w&dib_tag=se&keywords=The+Green+Mile&qid=1756463430&s=audible&sprefix=the+green+mile%2Caudible%2C353&sr=1-1",
        publisherUrl: "https://orion.com/green-mile"
      },
      "desperation": {
        id: "desperation",
        title: "Desperation",
        year: 1996,
        cover: "/book-desperation.jpg",
        synopsis: "Travelers passing through the seemingly abandoned mining town of Desperation, Nevada, are imprisoned by the town's deranged police chief, Collie Entragian. They soon discover that an ancient evil has been awakened by mining operations and has possessed most of the townspeople. The survivors must band together and rely on faith to battle this malevolent force. This horror novel explores themes of good versus evil and the power of belief.",
        pages: 690,
        genre: ["Horror", "Supernatural", "Religious"],
        amazonUrl: "https://www.amazon.co.uk/Desperation/dp/B01H0J83PW/ref=sr_1_1?crid=3V2W0L5D1AVBU&dib=eyJ2IjoiMSJ9.LmH1WxuSmdfWedJWmE5zbvxS5P6F15LNWFXSYkVHXoS20eFBeRrDAnBfza1Z6-tcc86iDfy3rkTsMnia9CWvQVlUed1_dwXQyU23m3QTcLNSa_0NF41PcmOb3h2blY-leHepjxWl_bHD4b6pZspd602LuCE4Av2056TxbpnR9AS8j1kYIApxNCOPCyPyGk76s3btnjzUdgXhf-MnynWcY42I2sO794N6yR87de693yg.bty-Y7VUzaGZ2Xg9-9S7a_8OEFw4dhIZO-HJI_6Z6Vc&dib_tag=se&keywords=Desperation&qid=1756463480&s=audible&sprefix=desperation%2Caudible%2C610&sr=1-1",
        publisherUrl: "https://viking.com/desperation"
      },
      "bag-of-bones": {
        id: "bag-of-bones",
        title: "Bag of Bones",
        year: 1998,
        cover: "/book-bag-of-bones.jpg",
        synopsis: "Four years after his wife Johanna's sudden death, bestselling novelist Mike Noonan finally returns to their lake house in western Maine. There he becomes involved in a custody battle for a young girl while being haunted by his wife's ghost and the dark history of the area. This Gothic horror novel combines elements of ghost story, legal thriller, and love story while exploring grief, writing, and the power of the past.",
        pages: 529,
        genre: ["Horror", "Gothic", "Ghost Story", "Romance"],
        amazonUrl: "https://www.amazon.co.uk/Bag-of-Bones/dp/B002SQ8TQG/ref=sr_1_1?crid=1PKC5GVQ005OG&dib=eyJ2IjoiMSJ9.xgdLdql5vxFTSr2Lt97SsaU_IsY_Q3abP_M7efMQemo6y7JH0-iPAVcz0tbB_p6TPTP2x1yOvkMsp0oqgqnog7giGbPh9TEih17cR9TuuQw.wGBXqp1R9pgdMhUsac2wYY0CBq8YfXANd1PfVL7mI98&dib_tag=se&keywords=bag-of-bones&qid=1756463514&s=audible&sprefix=bag-of-bones%2Caudible%2C211&sr=1-1",
        publisherUrl: "https://scribner.com/bag-of-bones",
        awards: ["Bram Stoker Award", "British Fantasy Award"]
      },
      "the-girl-who-loved-tom-gordon": {
        id: "the-girl-who-loved-tom-gordon",
        title: "The Girl Who Loved Tom Gordon",
        year: 1999,
        cover: "/book-girl-tom-gordon.jpg",
        synopsis: "Nine-year-old Trisha McFarland gets lost in the woods during a family hike and must survive alone for nine days. Armed only with her Walkman and her love for baseball player Tom Gordon, Trisha faces hunger, injury, and her own fears while trying to find her way home. This survival story combines realistic outdoor adventure with supernatural elements as Trisha encounters both real and imagined dangers in the wilderness.",
        pages: 224,
        genre: ["Horror", "Survival", "Coming-of-age", "Adventure"],
        amazonUrl: "https://www.amazon.co.uk/Girl-Who-Loved-Tom-Gordon/dp/B002SQF7UW/ref=sr_1_1?crid=1LMHRFNI5H9M1&dib=eyJ2IjoiMSJ9.zS4_Grsa9cSGYUNAL2jf--V1vZPEhtzrCzZa3Mqqgi2eTw-vSrnXhEUrTVPaNGO_zL50yULou9bZPgH0xveOgLN7olk95VSUBkM_oaV0VVY.6oLam0ZONRWdLe3ZHYPkemyDTpmsHsTUY_7ysXWwuoM&dib_tag=se&keywords=The+Girl+Who+Loved+Tom+Gordon&qid=1756463554&s=audible&sprefix=the+girl+who+loved+tom+gordon%2Caudible%2C196&sr=1-1",
        publisherUrl: "https://scribner.com/girl-who-loved-tom-gordon"
      },
      "hearts-in-atlantis": {
        id: "hearts-in-atlantis",
        title: "Hearts in Atlantis",
        year: 1999,
        cover: "/book-hearts-atlantis.jpg",
        synopsis: "This collection of interconnected stories follows Bobby Garfield from childhood to middle age, beginning when he meets Ted Brautigan, a mysterious man with psychic abilities who becomes his surrogate father. The stories span from the 1960s to the 1990s, exploring how the Vietnam War and the cultural upheaval of the era shaped an entire generation. Connected to the Dark Tower series, this book examines lost innocence and the price of growing up.",
        pages: 523,
        genre: ["Drama", "Coming-of-age", "Historical Fiction", "Dark Tower"],
        amazonUrl: "https://www.amazon.co.uk/Hearts-in-Atlantis/dp/B002SQDG1Y/ref=sr_1_1?crid=1IEY5VWKEXJD9&dib=eyJ2IjoiMSJ9.SWchqhJWvAR51MZssl47LJy4hWbwJBnB_uimAB0ixz6BuoYYY1DXlq5zTNUsBq9T.IiaBII3EgXW8VUfDMgy-itfA1f3gY0rqHiB8SbyYCZU&dib_tag=se&keywords=Hearts+in+Atlantis&qid=1756463749&s=audible&sprefix=hearts+in+atlantis%2Caudible%2C295&sr=1-1",
        publisherUrl: "https://scribner.com/hearts-in-atlantis"
      },
      "dreamcatcher": {
        id: "dreamcatcher",
        title: "Dreamcatcher",
        year: 2001,
        cover: "/book-dreamcatcher.jpg",
        synopsis: "Four lifelong friends - Gary, Pete, Henry, and Jonesy - gained telepathic abilities as children after rescuing a mentally disabled boy named Duddits. Years later, during their annual hunting trip, they encounter an alien invasion and must use their psychic connections to save humanity. This science fiction horror novel combines elements of alien invasion, body horror, and the enduring power of friendship forged in childhood.",
        pages: 620,
        genre: ["Science Fiction", "Horror", "Alien Invasion", "Telepathy"],
        amazonUrl: "https://www.amazon.co.uk/Dreamcatcher/dp/B002SQAXQ0/ref=sr_1_1?crid=2NDG0C9B1MIQL&dib=eyJ2IjoiMSJ9.twEYfdHRhBdh1RP5KNfHZz_MSENBOqmYw1hXQnvig3HR7ozmF5Tb1g-0v4O2e0x38VftXl1eUPj-1JsOd-jkRDOkdIyp0zNEQFFc98TPiYXM1D5WLnAoh2bAafO7teFGECeuXy9KrNVi6xPoUavW7SaIzrnN7KzXpwZ0d4fTpxjYyiC44iZ06qvg82n9N6twAILnvPmfjm7WIZNrCvHz5LvSCCAuEbDdjSrIKiNufoU.KqDshHs-7-Uo8em4sk-ZeynSc2w-CL1B-y7moll9X3o&dib_tag=se&keywords=Dreamcatcher&qid=1756463713&s=audible&sprefix=dreamcatcher%2Caudible%2C263&sr=1-1",
        publisherUrl: "https://scribner.com/dreamcatcher"
      },
      "from-a-buick-8": {
        id: "from-a-buick-8",
        title: "From a Buick 8",
        year: 2002,
        cover: "/book-from-buick-8.jpg",
        synopsis: "For twenty years, Troop D of the Pennsylvania State Police have kept a secret in their shed: a mysterious 1954 Buick Roadmaster that isn't really a car at all, but a portal to another dimension. When veteran trooper Curtis Wilcox dies in a traffic accident, his son Ned learns the truth about the Buick and the strange, deadly things that sometimes emerge from it. This science fiction horror novel explores curiosity, duty, and the dangers of the unknown.",
        pages: 355,
        genre: ["Science Fiction", "Horror", "Mystery", "Supernatural"],
        amazonUrl: "https://www.amazon.co.uk/From-a-Buick-8/dp/B008MZT2A4/ref=sr_1_1?crid=19ZSFGTCGPMIH&dib=eyJ2IjoiMSJ9.jVXMBXCxYP8ojuMxMrgVizz42k5YZ1odOaY2gTVFiYw.mWEpZIj80b76yDYngqWtA8RHRoUSIbngy9A7VQh62oU&dib_tag=se&keywords=From+a+Buick+8&qid=1756463684&s=audible&sprefix=from+a+buick+8%2Caudible%2C303&sr=1-1",
        publisherUrl: "https://scribner.com/from-a-buick-8"
      },
      "cell": {
        id: "cell",
        title: "Cell",
        year: 2006,
        cover: "/book-cell.jpg",
        synopsis: "A mysterious signal broadcast over cell phone networks turns anyone who receives it into a mindless, homicidal zombie. Clay Riddell witnesses civilization collapse in minutes and must travel across New England to find his son while avoiding the 'phone-crazies.' This apocalyptic horror novel explores our dependence on technology and examines what happens when our devices turn against us.",
        pages: 355,
        genre: ["Horror", "Post-apocalyptic", "Science Fiction", "Zombie"],
        amazonUrl: "https://www.amazon.co.uk/Cell/dp/B002SQ5OF0/ref=sr_1_1?crid=9WQDEHIIUY8F&dib=eyJ2IjoiMSJ9.Ow0zz3PrkyM0LEvHKvB2dGeW1MYrEnM9W-DESLR_yegcTdm3bGRUX-YPSFt0Tsl8U1DhLJCxLp4i0ZaQPo4V6h6HOGXoxXCpUoxM6cf-ipW0peevGzcnPHy7fnS9Md8Olx0RMpe_BW33KWwHddImMFHRyDjf_Z1nKuy1akvY9DU8lRIespj4R7kx1ikAcjhAUs280QSIQSRbkIAAvUlrKTQb9OAdtOP9L8vISGfy6h0.wYaKWNyaH3-Zv8QG9nnuCk8lC7oBoFzpOjKoDHS6vk0&dib_tag=se&keywords=cell&qid=1756463618&s=audible&sprefix=coll%2Caudible%2C209&sr=1-1",
        publisherUrl: "https://scribner.com/cell"
      },
      "lisey-story": {
        id: "lisey-story",
        title: "Lisey's Story",
        year: 2006,
        cover: "/book-liseys-story.jpg",
        synopsis: "Two years after her husband Scott's death, Lisey Landon finally begins cleaning out his office. A bestselling novelist, Scott left behind manuscripts and clues that lead Lisey to discover his connection to a fantastical other world called Boo'ya Moon. As a dangerous fan threatens her, Lisey must use Scott's legacy and her own inner strength to survive. This dark fantasy explores love, loss, and the healing power of memory.",
        pages: 513,
        genre: ["Dark Fantasy", "Horror", "Romance", "Supernatural"],
        amazonUrl: "https://www.amazon.co.uk/s?k=Lisey%27s+Story&i=audible&crid=1OC60VM701Z2K&sprefix=lisey%27s+story%2Caudible%2C324&ref=nb_sb_noss_2",
        publisherUrl: "https://scribner.com/liseys-story",
        awards: ["Bram Stoker Award", "World Fantasy Award"]
  }
    };

    return books[bookId] || null;
  };

  const book = id ? getBookDetails(id) : null;

  if (!book) {
    return (
      <main className="min-h-screen py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-playfair font-bold text-primary mb-4">
            Book Not Found
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            The book you're looking for doesn't exist in our collection.
          </p>
          <Link to="/books" className="btn-literary">
            Back to Books
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          {/* Back Button */}
          <Link
            to="/books"
            className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-300 mb-8"
          >
            <ArrowLeft size={20} />
            <span className="font-inter font-medium">Back to Books</span>
          </Link>

          {/* Book Details */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Book Cover */}
            <div className="text-center lg:text-left">
              <div className="inline-block overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={book.cover}
                  alt={`${book.title} cover`}
                  className="w-full max-w-md h-auto transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* Book Information */}
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl font-playfair font-bold text-primary mb-2">
                  {book.title}
                </h1>
                <div className="flex items-center space-x-6 text-muted-foreground mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span className="font-inter">{book.year}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BookOpen size={16} />
                    <span className="font-inter">{book.pages} pages</span>
                  </div>
                </div>
                
                {book.series && (
                  <p className="text-accent font-inter font-medium mb-4">
                    Part of: {book.series}
                  </p>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {book.genre.map((g) => (
                    <span
                      key={g}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-inter"
                    >
                      {g}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-playfair font-bold text-primary mb-4">
                  Synopsis
                </h2>
                <p className="text-lg text-foreground leading-relaxed">
                  {book.synopsis}
                </p>
              </div>

              {book.awards && book.awards.length > 0 && (
                <div>
                  <h3 className="text-xl font-playfair font-bold text-primary mb-3">
                    Awards & Recognition
                  </h3>
                  <ul className="space-y-2">
                    {book.awards.map((award, index) => (
                      <li key={index} className="text-foreground font-inter">
                        • {award}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Purchase Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a
                  href={book.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-literary inline-flex items-center justify-center space-x-2"
                >
                  <span>Buy on Amazon</span>
                  <ExternalLink size={16} />
                </a>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BookDetail;