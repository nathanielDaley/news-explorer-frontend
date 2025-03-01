const newsApiKey = "3c712a3af1454c1a9513afd875510fd6";

const defaultNumberOfArticlesToRetrieve = 100;
const deltaTimeToSearch = new Date(
  Date.now() - 7 * 24 * 60 * 60 * 1000
).toISOString();

const constantNewsArticles = [
  {
    _id: 1,
    source: {
      id: "the-washington-post",
      name: "The Washington Post",
    },
    author: "Hannah Knowles, Maeve Reston, Marianna Sotomayor, Mariana Alfaro",
    title:
      "Trump’s threat to place conditions on fire aid outrages Democrats - The Washington Post",
    description:
      "Withholding natural disaster aid to force policy changes is unusual and would mark a major escalation in Republicans’ feuds with blue states.",
    url: "https://www.washingtonpost.com/politics/2025/01/15/trump-newsom-california-fire-aid/",
    urlToImage:
      "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/FEEDLCOK6KQNBRNRMBWGOKQUUU.JPG&w=1440",
    publishedAt: "2025-01-16T02:32:24Z",
    content:
      "President-elect Donald Trumps long-standing threats to place conditions on California wildfire aid are gaining traction with Republicans, looming over the governments response to the devastation in L… [+9628 chars]",
  },
  {
    _id: 2,
    source: {
      id: null,
      name: "[Removed]",
    },
    author: null,
    title: "[Removed]",
    description: "[Removed]",
    url: "https://removed.com",
    urlToImage: null,
    publishedAt: "2025-01-16T02:23:00Z",
    content: "[Removed]",
  },
  {
    _id: 3,
    source: {
      id: "abc-news",
      name: "ABC News",
    },
    author: "ABC News",
    title:
      "Biden, in farewell address, warns about dangers of unchecked power in wealthy - ABC News",
    description: null,
    url: "https://abcnews.go.com/Politics/biden-set-give-farewell-address-after-securing-israel/story?id\\=117719108",
    urlToImage: null,
    publishedAt: "2025-01-16T01:29:26Z",
    content: null,
  },
  {
    _id: 4,
    source: {
      id: null,
      name: "Investor's Business Daily",
    },
    author: null,
    title:
      "Dow Jones Futures Rise After Market Rallies Above Key Levels; Tesla, Meta Lead 12 New Buys - Investor's Business Daily",
    description: "The stock market surged on a tame inflation report.",
    url: "https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-market-rally-tesla-meta-new-buys/",
    urlToImage:
      "https://www.investors.com/wp-content/uploads/2018/11/Stock-BikerMountain-01-adobe.jpg",
    publishedAt: "2025-01-16T01:00:00Z",
    content:
      "Dow Jones futures were little changed overnight, along with S&amp;P 500 futures and Nasdaq futures. Nvidia chipmaker Taiwan Semiconductor (TSM), UnitedHealth (UNH), Bank of America (BAC) and Morgan S… [+6169 chars]",
  },
  {
    _id: 5,
    source: {
      id: null,
      name: "NBC Southern California",
    },
    author: null,
    title:
      "If LA wildfires are still burning, why aren't there flames or smoke? - NBC Los Angeles",
    description:
      "What does wildfire containment mean? Is it related to the amount of flames and smoke we see? Kevin Jeanes explains for the NBC4 News at 4 p.m. on Wednesday,…",
    url: "https://www.nbclosangeles.com/news/local/if-la-wildfires-are-still-burning-why-arent-there-flames-or-smoke/3606140/",
    urlToImage:
      "https://media.nbclosangeles.com/2025/01/37182307934-1080pnbcstations.jpg?quality=85&strip=all&resize=1200%2C675",
    publishedAt: "2025-01-16T00:55:23Z",
    content: null,
  },
  {
    _id: 6,
    source: {
      id: null,
      name: "KTLA Los Angeles",
    },
    author: "Iman Palm",
    title:
      "State Farm to offer renewals to policyholders impacted by L.A. County wildfires - KTLA Los Angeles",
    description:
      "(KTLA) – State Farm, California’s largest insurer, announced on Wednesday that it will offer renewals to residential policyholders affected by the deadly wildfires across Los Angeles County. The company previously had plans to drop many of these policies. Sta…",
    url: "https://ktla.com/news/california/wildfires/state-farm-to-offer-renewals-to-policyholders-impacted-by-l-a-county-wildfires/",
    urlToImage:
      "https://ktla.com/wp-content/uploads/sites/4/2025/01/GettyImages-2193260083.jpg?w=1280",
    publishedAt: "2025-01-16T00:54:08Z",
    content:
      "(KTLA) – State Farm, Californias largest insurer, announced on Wednesday that it will offer renewals to residential policyholders affected by the deadly wildfires across Los Angeles County. The compa… [+1642 chars]",
  },
  {
    _id: 7,
    source: {
      id: "associated-press",
      name: "Associated Press",
    },
    author: "LISA MASCARO",
    title:
      "Trump’s outsider Cabinet picks are rapidly gaining support for confirmation - The Associated Press",
    description:
      "One by one, President-elect Donald Trump's hoped-for Cabinet is falling into place. Defense Secretary pick Pete Hegseth was back on track after a fiery Senate confirmation hearing that probed his drinking, allegations of sexual assault and qualifications to l…",
    url: "https://apnews.com/article/trump-cabinet-confirmation-hearings-e12dcbc5d26d675414331d9a35cab6a6",
    urlToImage:
      "https://dims.apnews.com/dims4/default/a4ea777/2147483647/strip/true/crop/4114x2314+0+214/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fec%2Fdb%2F33e850a4c95c58bbcdde47e54b2b%2Fada267207cc14c109609926d5e26d826",
    publishedAt: "2025-01-16T00:51:00Z",
    content:
      "WASHINGTON (AP) One by one, all the president-elect s men, and women, are falling into place in his Cabinet.\r\nWhile Defense Secretary pick Pete Hegseths nomination was teetering toward collapse just … [+6226 chars]",
  },
  {
    _id: 8,
    source: {
      id: null,
      name: "BBC News",
    },
    author: null,
    title: "Gaza ceasefire deal: What do we know? - BBC.com",
    description:
      "What we know so far about the ceasefire deal agreed between Israel and Hamas.",
    url: "https://www.bbc.com/news/articles/cy5klgv5zv0o",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/ed8f/live/2f43ddd0-d29d-11ef-87df-d575b9a434a4.jpg",
    publishedAt: "2025-01-16T00:25:18Z",
    content:
      "Israel and Hamas have agreed a deal which could halt the war in Gaza and see the release of Israeli hostages and Palestinian prisoners, the US and mediators Qatar have said.\r\nIt would be the most dra… [+5495 chars]",
  },
  {
    _id: 9,
    source: {
      id: null,
      name: "Deadline",
    },
    author: "Patrick Hipes",
    title:
      "Trump Inauguration Performers: Kid Rock, Billy Ray Cyrus, Underwood, More - Deadline",
    description:
      "Kid Rock, the Village People, Billy Ray Cyrus, Lee Greenwood, Rascal Flatts, Jason Aldean and more will perform during Donald Trump's inauguration.",
    url: "http://deadline.com/2025/01/donald-trump-inauguration-performers-1236258118/",
    urlToImage:
      "https://deadline.com/wp-content/uploads/2025/01/Kid-Rock-Billy-Ray-Cyrus-the-Village-People-and-Lee-Greenwood.jpg?w=1024",
    publishedAt: "2025-01-16T00:09:00Z",
    content:
      "Carrie Underwood will be joined by performers including Kid Rock, the Village People, Billy Ray Cyrus, Lee Greenwood, Rascal Flatts, Jason Aldean and more over the weekend and Monday as part of Donal… [+2312 chars]",
  },
  {
    _id: 10,
    source: {
      id: "politico",
      name: "Politico",
    },
    author: "Robbie Gramer",
    title: "Rubio’s not terrible, no drama, very cordial day - POLITICO",
    description:
      "Other Trump nominees have run a fiery confirmation gauntlet, but Rubio sauntered through.",
    url: "https://www.politico.com/news/2025/01/15/rubio-senate-confirmation-hearing-00198494",
    urlToImage:
      "https://static.politico.com/79/cf/cc50bd614eb8b6fcafc643f1e209/marco-rubio-confirmation-hearing-trump-cabinet-picks-95259.jpg",
    publishedAt: "2025-01-15T21:50:49Z",
    content:
      "It was a stark contrast from the fireworks that Trumps Defense secretary nominee, Pete Hegseth, faced in his contentious hearing Tuesday. And it set the stage for several hours of questions Rubio fac… [+2430 chars]",
  },
  {
    _id: 11,
    source: {
      id: null,
      name: "MinnPost",
    },
    author: "Peter Callaghan",
    title:
      "Awkward: House members tell MN governor they're organized - MinnPost",
    description:
      "It is usually a fun, sometimes silly legislative tradition. So what happened when GOP House members tried to do it this year?",
    url: "http://www.minnpost.com/state-government/2025/01/heres-what-happened-when-republican-house-members-carried-out-legislative-tradition-to-tell-governor-the-house-is-organized/",
    urlToImage:
      "https://www.minnpost.com/wp-content/uploads/2025/01/LeahMontgomery4Reps940.png",
    publishedAt: "2025-01-15T21:15:34Z",
    content:
      "Daily Newsletter | MinnPost's top stories delivered to your inbox Monday through Saturday.\r\nA brief vignette at the Minnesota State Capitol Wednesday demonstrated that nothing is routine this year.\r\n… [+1400 chars]",
  },
  {
    _id: 12,
    source: {
      id: null,
      name: "Variety",
    },
    author: "Jem Aswad",
    title:
      "Universal Music Slams Drake’s ‘Illogical’ Lawsuit Over Kendrick Lamar’s ‘Not Like Us’ - Variety",
    description:
      "Universal Music has posted a fiery response to Drake's lawsuit against it around Kendrick Lamar's brutal diss track, 'Not Like Us.'",
    url: "https://variety.com/2025/music/news/universal-music-slams-drake-illogical-lawsuit-kendrick-lamar-not-like-us-1236275344/",
    urlToImage:
      "https://variety.com/wp-content/uploads/2020/09/var_universal223977.jpg?w=1000&h=563&crop=1",
    publishedAt: "2025-01-15T21:01:00Z",
    content:
      "Universal Music Group has posted a fiery response to Drake’s lawsuit around Kendrick Lamar’s brutal diss track, “Not Like Us,” in which he accuses the company — his label for more than a decade — of … [+2862 chars]",
  },
  {
    _id: 13,
    source: {
      id: "cnn",
      name: "CNN",
    },
    author: "Madeline Holcombe, CNN",
    title:
      "Swapping red meat for plant-based proteins could reduce your dementia risk by nearly 20%, study says - AOL",
    description:
      "Eating too much red meat has been associated with poor health outcomes, but a new study shows it could also put your future cognitive health at risk.",
    url: "https://www.cnn.com/2025/01/15/health/red-meat-dementia-wellness/index.html",
    urlToImage:
      "https://media.zenfs.com/en/aol_cnn_articles_945/c6110d157cb3cddc66b46ea57b4d8f6b",
    publishedAt: "2025-01-15T21:00:42Z",
    content:
      "Sign up for CNNs Eat, But Better: Mediterranean Style. Our eight-part guide shows you a delicious expert-backed eating lifestyle that will boost your health for life.\r\nReducing your red meat consumpt… [+4610 chars]",
  },
  {
    _id: 14,
    source: {
      id: "politico",
      name: "Politico",
    },
    author: "Hailey Fuchs, Kyle Cheney, Josh Gerstein",
    title:
      "It was Pam Bondi’s hearing. Kash Patel was in the hot seat. - POLITICO",
    description:
      "The fixation by Senate Democrats became clear early in the confirmation hearing for Donald Trump's attorney general pick.",
    url: "https://www.politico.com/news/2025/01/15/pam-bondi-hearing-kash-patel-in-hot-seat-004272",
    urlToImage:
      "https://static.politico.com/db/4b/babc3d9c43349b31d37a3cc543ab/u-s-congress-54236.jpg",
    publishedAt: "2025-01-15T20:46:55Z",
    content:
      "It all amounted to signs that Democrats view Patel a polarizing MAGA loyalist who served in Trumps first administration as an easier target than Bondi, who seems to be on a glide path to confirmation… [+4204 chars]",
  },
  {
    _id: 15,
    source: {
      id: null,
      name: "IndieWire",
    },
    author: "Harrison Richlin",
    title:
      "2025 WGA Award Nominees Include ‘A Real Pain,’ ‘Anora,’ ‘Wicked,’ and More - IndieWire",
    description:
      "2025 WGA Award Nominations: See full list, which includes recognition for 'Anora,' 'Wicked,' and 'A Real Pain,' among many more.",
    url: "https://www.indiewire.com/awards/results/2025-wga-award-nominations-full-list-1235084627/",
    urlToImage:
      "https://www.indiewire.com/wp-content/uploads/2025/01/MCDREPA_H4034.jpg?w=650",
    publishedAt: "2025-01-15T19:14:28Z",
    content:
      "Despite having to postpone its announcement due to the turmoil currently being faced in Los Angeles as a result of the Southern California wildfires, the Writers Guild of America has now released its… [+11360 chars]",
  },
  {
    _id: 16,
    source: {
      id: "associated-press",
      name: "Associated Press",
    },
    author: "JONEL ALECCIA",
    title: "FDA bans red dye No. 3 from foods - The Associated Press",
    description:
      "U.S. regulators are banning the dye called Red 3 from the food supply. The move comes nearly 35 years after the dye was barred from cosmetics such as lipsticks because of potential cancer risk. Food and Drug Administration officials on Wednesday granted a 202…",
    url: "https://apnews.com/article/fda-red-dye-no-3-ban-94c3e418584fb1e91ca3b0cbeb3d5a60",
    urlToImage:
      "https://dims.apnews.com/dims4/default/fcc5d7c/2147483647/strip/true/crop/960x540+0+50/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F31%2Fac%2Fbedea4e7e18256ce7170785bc19b%2Fc82dcf2b48a245ba96d5bf160749e208",
    publishedAt: "2025-01-15T19:07:00Z",
    content:
      "U.S. regulators on Wednesday banned the dye called Red 3 from the nations food supply, nearly 35 years after it was barred from cosmetics because of potential cancer risk.\r\nFood and Drug Administrati… [+5182 chars]",
  },
  {
    _id: 17,
    source: {
      id: "techcrunch",
      name: "TechCrunch",
    },
    author: "Kyle Wiggers",
    title:
      "AI researcher François Chollet founds a new AI lab focused on AGI - TechCrunch",
    description:
      "François Chollet, an influential AI researcher, is launching a new startup that aims to build frontier AI systems with novel designs.",
    url: "https://techcrunch.com/2025/01/15/ai-researcher-francois-chollet-founds-a-new-ai-lab-focused-on-agi/",
    urlToImage:
      "https://techcrunch.com/wp-content/uploads/2024/11/GettyImages-1495979689.jpg?resize=1200,750",
    publishedAt: "2025-01-15T18:37:29Z",
    content:
      "François Chollet, an influential AI researcher, is launching a new startup that aims to build frontier AI systems with novel designs. \r\nThe startup, Ndea, will consist of an AI research and science l… [+3497 chars]",
  },
  {
    _id: 18,
    source: {
      id: null,
      name: "Footballscoop.com",
    },
    author: "Zach Barnett",
    title:
      "Jerry Jones running Dallas Cowboys head coaching search by himself, hasn't spoken with suspected candidates - Footballscoop",
    description: "Jerry gonna Jerry.",
    url: "https://footballscoop.com/news/jerry-jones-running-dallas-cowboys-head-coaching-search-by-himself-hasnt-spoken-with-suspected-candidates",
    urlToImage:
      "https://footballscoop.com/.image/t_share/MTgyMTUyNjI4ODI0NzEyNTIw/jerry-jones-training-camp.jpg",
    publishedAt: "2025-01-15T17:34:37Z",
    content:
      "We're closing in on 48 hours since the Dallas Cowboys job opened and so far the only name confirmed to have spoken with the club is Deion Sanders. \r\nThis, it turns out, is by design.\r\nJane Slater rep… [+2526 chars]",
  },
  {
    _id: 19,
    source: {
      id: null,
      name: "The Conversation Africa",
    },
    author: "Christian Yates",
    title:
      "Forget BMI – there’s a 2,000 year-old technique for measuring body fat that’s more useful - The Conversation Indonesia",
    description: "Archimedes has the solution.",
    url: "https://theconversation.com/forget-bmi-theres-a-2-000-year-old-technique-for-measuring-body-fat-thats-more-useful-247477",
    urlToImage:
      "https://images.theconversation.com/files/642595/original/file-20250115-15-639yfw.jpg?ixlib=rb-4.1.0&rect=0%2C426%2C5469%2C2730&q=45&auto=format&w=1356&h=668&fit=crop",
    publishedAt: "2025-01-15T17:16:42Z",
    content:
      "Its the start of another year and the body mass index (BMI) is being criticised again. This time a Lancet-commissioned group of experts is denouncing it as a diagnostic tool for obesity. They say tha… [+5689 chars]",
  },
  {
    _id: 20,
    source: {
      id: "techcrunch",
      name: "TechCrunch",
    },
    author: "Sarah Perez",
    title: "Bluesky is getting its own photo-sharing app, Flashes - TechCrunch",
    description:
      "More good news for those looking to exit Meta's social app ecosystem in favor of a more open alternative: An independent developer is building a",
    url: "https://techcrunch.com/2025/01/15/bluesky-is-getting-its-own-photo-sharing-app-flashes/",
    urlToImage:
      "https://techcrunch.com/wp-content/uploads/2023/08/bluesky-004.jpg?resize=1200,675",
    publishedAt: "2025-01-15T17:11:13Z",
    content:
      "More good news for those looking to exit Meta’s social app ecosystem in favor of a more open alternative: An independent developer is building a photo-sharing app for Bluesky called Flashes. The soon… [+3795 chars]",
  },
];
export {
  newsApiKey,
  defaultNumberOfArticlesToRetrieve,
  deltaTimeToSearch,
  constantNewsArticles,
};
