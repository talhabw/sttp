import React from 'react';

const Form = () => {

  // Function to check if the input matches any pattern above
  function searchInput(input) {
    
    const list_of_patterns =
      {
        check_if_url_with_http: /(http|https)?\/\//g,
        check_if_url_without_http: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
        check_if_ip: /^(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/g,

        reddit_without_slash: /^r$/g,
        reddit_with_slash: /^r\/.*/g,

        x_without_slash: /^x$/g, 
        x_with_slash: /^x\/.*/g, 
        x_with_colon: /^x:/g,

        youtube_without_slash: /^y$/g,
        youtube_with_slash: /^y\/.*/g,
        youtube_with_colon: /^y:/g,

        github_without_slash: /^g$/g,
        github_with_slash: /^g\/.*/g,
        github_with_colon: /^g:/g,

        instagram_without_slash: /^i$/g,
        instagram_with_slash: /^i\/.*/g,

        whatsapp_without_slash: /^w$/g,

        translator_without_slash: /^tr$/g,
        translator_with_colon_tr: /^tr:/g,

        english_translation: /^en:/g,

        gmail_without_slash: /^m$/g,

        pinterest_without_slash: /^p$/g,
        pinterest_with_colon: /^p:/g,

        chat_gpt_without_slash: /^c$/g,

        linkedin_without_slash: /^l$/g,
        linkedin_with_slash: /^l\/+/g,

        notion_without_slash: /^no$/g,

        gdrive_without_slash: /^d$/g,

        notion_calendar_without_slash: /^nc$/g,
      }

    const patterns = [
      {
        pattern: list_of_patterns.check_if_url_with_http,
        action: (match) => {
          window.open(match, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.check_if_url_without_http,
        action: (match) => {
          if (!match.startsWith("http://") && !match.startsWith("https://")) {
            match = `http://${match}`;
          }
          window.open(match, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.check_if_ip,
        action: (match) => {
          window.open(`http://${match}`, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.reddit_without_slash,
        action: () => {
          window.open("https://reddit.com/", "_self", false);
        }
      },
      {
        pattern: list_of_patterns.reddit_with_slash,
        action: (match) => {
          window.open(`https://reddit.com/${match}`, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.x_without_slash,
        action: () => {
          window.open("https://x.com/", "_self", false);
        }
      },
      {
        pattern: list_of_patterns.x_with_slash,
        action: () => {
          let x_input = input.replace(/^x\/+/g, "");
          window.open(`https://x.com/${x_input}`, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.x_with_colon,
        action: () => {
          let xs_input = input.replace(/^x:/g, "");
          window.open(`https://x.com/search?q=${xs_input}&src=typed_query`, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.youtube_without_slash,
        action: () => {
          window.open("https://youtube.com/", "_self", false);
        }
      },
      {
        pattern: list_of_patterns.youtube_with_slash,
        action: () => {
          let y_input = input.replace(/^y\/+/g, "");
          window.open(`https://youtube.com/${y_input}`, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.youtube_with_colon,
        action: () => {
          let ys_input = input.replace(/^y:/g, "").replace(" ", "+");
          window.open(`https://youtube.com/results?search_query=${ys_input}`, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.github_without_slash,
        action: () => {
          window.open("https://github.com/", "_self", false);
        }
      },
      {
        pattern: list_of_patterns.github_with_slash,
        action: () => {
          let g_input = input.replace(/^g\/+/g, "");
          window.open(`https://github.com/${g_input}`, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.github_with_colon,
        action: () => {
          let gs_input = input.replace(/^g:/g, "").replace(" ", "+");
          window.open(`https://github.com/search?q=${gs_input}`, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.instagram_without_slash,
        action: () => {
          window.open("https://instagram.com", "_self", false);
        }
      },
      {
        pattern: list_of_patterns.instagram_with_slash,
        action: () => {
          let i_input = input.replace(/^i\/+/g, "");
          window.open(`https://instagram.com/${i_input}`, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.whatsapp_without_slash,
        action: () => {
          window.open("https://web.whatsapp.com/", "_self", false);
        }
      },
      {
        pattern: list_of_patterns.translator_without_slash,
        action: () => {
          window.open("https://translate.google.com/", "_self", false);
        }
      },
      {
        pattern: list_of_patterns.translator_with_colon_tr,
        action: () => {
          let trs_input = input.replace(/^tr:/g, "");
          window.open(`https://translate.google.com/#view=home&op=translate&sl=auto&tl=tr&text=${trs_input}`, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.english_translation,
        action: () => {
          let en_input = input.replace(/^en:/g, "");
          window.open(`https://translate.google.com/#view=home&op=translate&sl=auto&tl=en&text=${en_input}`, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.gmail_without_slash,
        action: () => {
          window.open("https://gmail.com/", "_self", false);
        }
      },
      {
        pattern: list_of_patterns.pinterest_without_slash,
        action: () => {
          window.open("https://pinterest.com/", "_self", false);
        }
      },
      {
        pattern: list_of_patterns.pinterest_with_colon,
        action: () => {
          let p_input = input.replace(/^p:/g, "");
          window.open(`https://br.pinterest.com/search/pins/?q=${p_input}`, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.chat_gpt_without_slash,
        action: () => {
          window.open("https://chat.openai.com/", "_self", false);
        }
      },
      {
        pattern: list_of_patterns.linkedin_without_slash,
        action: () => {
          window.open("https://linkedin.com/", "_self", false);
        }
      },
      {
        pattern: list_of_patterns.linkedin_with_slash,
        action: () => {
          let l_input = input.replace(/^l\/+/g, "");
          window.open(`https://www.linkedin.com/in/${l_input}`, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.notion_without_slash,
        action: () => {
          window.open(`https://www.notion.so/`, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.gdrive_without_slash,
        action: () => {
          window.open(`https://drive.google.com/`, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.notion_calendar_without_slash,
        action: () => {
          window.open(`https://notion-calendar.vercel.app/`, "_self", false);
        }
      },
    ];

    for (const { pattern, action } of patterns) {
      if (pattern.test(input)) {
        const match = input.match(pattern)[0];
        action(match);
        return;
      }
    }

    window.open(`https://google.com/search?q=${input}`, "_self", false);
  }

  React.useEffect(() => {
    const searchInputHandler = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        searchInput(Search.value);
      }
    };
    Search.addEventListener("keypress", searchInputHandler);

    return () => {
      Search.removeEventListener("keypress", searchInputHandler);
    };
  }, []);

  return (
   <textarea id="Search" spellCheck="false" wrap="off" > 
   </textarea>
  )

}

export default Form
