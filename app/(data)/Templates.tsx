export const Templates = [
    {
        name: "Blog Title",
        desc: "An AI Tool That Generates Blog Titles Based On Your Prompt",
        category: "Blog",
        icon: "https://cdn-icons-png.flaticon.com/128/2799/2799954.png",
        aiPrompt: "Give Me 5 Blog Topic Idea Bullet Wise Only Based On Given Niche Topic And Give Me Result In Rich Text Formate",
        slug: "generate-blog-title",
        form: [
            {
                label: "Enter Your Blog Niche",
                field: "input",
                name: "niche",
                required: true
            },
            {
                label: "Enter Your Blog Outline",
                field: "textarea",
                name: "outline",
                required: false
            }
        ]
    },
    {
        name: "Blog Content",
        desc: "An AI Tool That Generates Blog Content Based On Your Prompt",
        category: "Blog",
        icon: "https://cdn-icons-png.flaticon.com/128/8733/8733428.png",
        aiPrompt: "Generate Blog Content With Given Topic In Rich Text Formate",
        slug: "generate-blog-content",
        form: [
            {
                label: "Enter Your Blog Topic",
                field: "input",
                name: "topic",
                required: true
            },
            {
                label: "Enter Your Blog Outline",
                field: "textarea",
                name: "outline",
                required: false
            }
        ]
    },
    {
        name: "YouTube Video Ideas",
        desc: "Generate YouTube Video Ideas  Based On Given Niche",
        category: "YouTube",
        icon: "https://cdn-icons-png.flaticon.com/128/1384/1384060.png",
        aiPrompt: "Provide 5 Unique YouTube Video Ideas Related To The Given Niche Topic In Bullet Points Only(No Description)",
        slug: "generate-youtube-ideas",
        form: [
            {
                label: "Enter Video Niche",
                field: "input",
                name: "niche",
                required: true
            }
        ]
    },
    {
        name: "YouTube Script Outline",
        desc: "Create a YouTube Video Script Outline Based On Your Topic",
        category: "YouTube",
        icon: "https://cdn-icons-png.flaticon.com/128/1384/1384060.png",
        aiPrompt: "Generate a Structured Outline For a YouTube Video Script Based On The Given Topic",
        slug: "generate-youtube-script-outline",
        form: [
            {
                label: "Enter Video Topic",
                field: "input",
                name: "topic",
                required: true
            },
            {
                label: "Enter Any Key Points You Want To Include",
                field: "textarea",
                name: "keypoints",
                required: false
            }
        ]
    },
    {
        name: "Code Explanation",
        desc: "Explain Code Snippets In Simple Language",
        category: "Code",
        icon: "https://cdn-icons-png.flaticon.com/128/3573/3573187.png",
        aiPrompt: "Explain The Provided Code In Simple Language With Step By Step Details",
        slug: "generate-code-explanation",
        form: [
            {
                label: "Paste Your Code Here",
                field: "textarea",
                name: "code",
                required: true
            }
        ]
    },
    {
        name: "Code Optimization",
        desc: "Optimize Code Snippets For Better Performance",
        category: "Code",
        icon: "https://cdn-icons-png.flaticon.com/128/3573/3573187.png",
        aiPrompt: "Optimize The Given Code For Better Performance And Provide Comments For Any Changes",
        slug: "optimize-code",
        form: [
            {
                label: "Paste Your Code Here",
                field: "textarea",
                name: "code",
                required: true
            }
        ]
    },
    {
        name: "Blog Intro Generator",
        desc: "Generate an Engaging Introduction for Your Blog Post",
        category: "Blog",
        icon: "https://cdn-icons-png.flaticon.com/128/2799/2799954.png",
        aiPrompt: "Generate a Catchy Introduction for a Blog Post Based on the Provided Topic",
        slug: "generate-blog-intro",
        form: [
            {
                label: "Enter Blog Topic",
                field: "input",
                name: "topic",
                required: true
            }
        ]
    },
    {
        name: "Blog Conclusion Generator",
        desc: "Create a Strong Conclusion for Your Blog Post",
        category: "Blog",
        icon: "https://cdn-icons-png.flaticon.com/128/2799/2799954.png",
        aiPrompt: "Write a Conclusion for a Blog Post Based on the Provided Topic and Key Points",
        slug: "generate-blog-conclusion",
        form: [
            {
                label: "Enter Blog Topic",
                field: "input",
                name: "topic",
                required: true
            },
            {
                label: "Enter Key Points or Summary of Blog",
                field: "textarea",
                name: "keypoints",
                required: false
            }
        ]
    },
    {
        name: "Blog SEO Keywords",
        desc: "Generate SEO-Friendly Keywords for Your Blog Post",
        category: "Blog",
        icon: "https://cdn-icons-png.flaticon.com/128/2799/2799954.png",
        aiPrompt: "Generate a List of SEO-Friendly Keywords Related to the Provided Blog Topic",
        slug: "generate-blog-seo-keywords",
        form: [
            {
                label: "Enter Blog Topic",
                field: "input",
                name: "topic",
                required: true
            }
        ]
    },
    {
        name: "Social Media Caption",
        desc: "Generate Engaging Captions for Social Media Posts",
        category: "Social",
        icon: "https://cdn-icons-png.flaticon.com/128/3955/3955024.png",
        aiPrompt: "Create an Engaging Social Media Caption Based on the Given Context",
        slug: "generate-social-caption",
        form: [
            {
                label: "Enter Post Context",
                field: "textarea",
                name: "context",
                required: true
            }
        ]
    },
    {
        name: "Email Newsletter",
        desc: "Create Professional Email Newsletter Content",
        category: "Email",
        icon: "https://cdn-icons-png.flaticon.com/128/561/561127.png",
        aiPrompt: "Generate Professional Email Newsletter Content Based on the Given Topic",
        slug: "generate-newsletter",
        form: [
            {
                label: "Enter Newsletter Topic",
                field: "input",
                name: "topic",
                required: true
            }
        ]
    },
    {
        name: "Product Description",
        desc: "Generate Compelling Product Descriptions",
        category: "Marketing",
        icon: "https://cdn-icons-png.flaticon.com/128/3081/3081559.png",
        aiPrompt: "Create a Compelling Product Description Based on the Given Details",
        slug: "generate-product-description",
        form: [
            {
                label: "Enter Product Details",
                field: "textarea",
                name: "details",
                required: true
            }
        ]
    },
    {
        name: "Meta Description",
        desc: "Generate SEO-Optimized Meta Descriptions",
        category: "SEO",
        icon: "https://cdn-icons-png.flaticon.com/128/1378/1378598.png",
        aiPrompt: "Create an SEO-Friendly Meta Description Based on the Given Content",
        slug: "generate-meta-description",
        form: [
            {
                label: "Enter Page Content or Topic",
                field: "textarea",
                name: "content",
                required: true
            }
        ]
    },
    {
        name: "FAQ Generator",
        desc: "Generate Relevant FAQs for Your Content",
        category: "Content",
        icon: "https://cdn-icons-png.flaticon.com/128/4403/4403358.png",
        aiPrompt: "Generate a List of Relevant FAQs Based on the Given Topic",
        slug: "generate-faqs",
        form: [
            {
                label: "Enter Topic",
                field: "input",
                name: "topic",
                required: true
            }
        ]
    },
    {
        name: "Content Rewriter",
        desc: "Rewrite Content While Maintaining Context",
        category: "Content",
        icon: "https://cdn-icons-png.flaticon.com/128/2921/2921222.png",
        aiPrompt: "Rewrite the Given Content While Maintaining Its Original Context",
        slug: "rewrite-content",
        form: [
            {
                label: "Enter Content to Rewrite",
                field: "textarea",
                name: "content",
                required: true
            }
        ]
    },
    {
        name: "Hashtag Generator",
        desc: "Generate Relevant Hashtags for Social Media",
        category: "Social",
        icon: "https://cdn-icons-png.flaticon.com/128/1827/1827975.png",
        aiPrompt: "Generate Relevant Hashtags Based on the Given Topic or Content",
        slug: "generate-hashtags",
        form: [
            {
                label: "Enter Topic or Content",
                field: "textarea",
                name: "content",
                required: true
            }
        ]
    },
    {
        name: "Call-to-Action Generator",
        desc: "Create Compelling Call-to-Action Phrases",
        category: "Marketing",
        icon: "https://cdn-icons-png.flaticon.com/128/1584/1584942.png",
        aiPrompt: "Generate Compelling Call-to-Action Phrases Based on the Given Context",
        slug: "generate-cta",
        form: [
            {
                label: "Enter Context or Goal",
                field: "textarea",
                name: "context",
                required: true
            }
        ]
    },
    {
        name: "Article Summarizer",
        desc: "Create Concise Summaries of Long Articles",
        category: "Content",
        icon: "https://cdn-icons-png.flaticon.com/128/2799/2799954.png",
        aiPrompt: "Generate a Concise Summary of the Given Article Content",
        slug: "summarize-article",
        form: [
            {
                label: "Paste Article Content",
                field: "textarea",
                name: "content",
                required: true
            }
        ]
    },
    {
        name: "Video Description",
        desc: "Generate Engaging Video Descriptions",
        category: "YouTube",
        icon: "https://cdn-icons-png.flaticon.com/128/1384/1384060.png",
        aiPrompt: "Create an Engaging Video Description Based on the Given Details",
        slug: "generate-video-description",
        form: [
            {
                label: "Enter Video Title and Key Points",
                field: "textarea",
                name: "details",
                required: true
            }
        ]
    },
    {
        name: "LinkedIn Post Generator",
        desc: "Generate Professional LinkedIn Posts Based on a Given Topic",
        category: "Social",
        icon: "https://cdn-icons-png.flaticon.com/128/2111/2111467.png",
        aiPrompt: "Create a Professional LinkedIn Post Based on the Given Topic and Details",
        slug: "generate-linkedin-post",
        form: [
            {
                label: "Enter Post Topic",
                field: "input",
                name: "topic",
                required: true
            },
            {
                label: "Enter Key Points or Details",
                field: "textarea",
                name: "details",
                required: false
            }
        ]
    },
    {
        name: "Job Description Generator",
        desc: "Create Job Descriptions for Various Roles",
        category: "HR",
        icon: "https://cdn-icons-png.flaticon.com/128/3135/3135715.png",
        aiPrompt: "Generate a Job Description Based on the Given Role and Responsibilities",
        slug: "generate-job-description",
        form: [
            {
                label: "Enter Job Title",
                field: "input",
                name: "title",
                required: true
            },
            {
                label: "Enter Key Responsibilities",
                field: "textarea",
                name: "responsibilities",
                required: false
            }
        ]
    },
    {
        name: "Resume Bullet Points",
        desc: "Generate Strong Bullet Points for Your Resume",
        category: "Career",
        icon: "https://cdn-icons-png.flaticon.com/128/196/196358.png",
        aiPrompt: "Generate Powerful Resume Bullet Points Based on the Given Job Role and Achievements",
        slug: "generate-resume-bullets",
        form: [
            {
                label: "Enter Job Role",
                field: "input",
                name: "role",
                required: true
            },
            {
                label: "Enter Key Achievements",
                field: "textarea",
                name: "achievements",
                required: false
            }
        ]
    },
    {
        name: "Poem Generator",
        desc: "Create a Poem Based on a Specific Theme",
        category: "Creative Writing",
        icon: "https://cdn-icons-png.flaticon.com/128/921/921329.png",
        aiPrompt: "Write a Poem Based on the Provided Theme or Emotion",
        slug: "generate-poem",
        form: [
            {
                label: "Enter Poem Theme or Emotion",
                field: "input",
                name: "theme",
                required: true
            }
        ]
    },
    {
        name: "Listicle Generator",
        desc: "Generate a List of Ideas or Points Based on a Topic",
        category: "Content",
        icon: "https://cdn-icons-png.flaticon.com/128/3126/3126540.png",
        aiPrompt: "Create a List of Ideas or Points Based on the Given Topic",
        slug: "generate-listicle",
        form: [
            {
                label: "Enter Topic",
                field: "input",
                name: "topic",
                required: true
            }
        ]
    },
    {
        name: "Personal Bio Generator",
        desc: "Generate a Short Personal Bio for Social Media or Websites",
        category: "Social",
        icon: "https://cdn-icons-png.flaticon.com/128/1077/1077012.png",
        aiPrompt: "Generate a Short and Engaging Bio Based on the Provided Information",
        slug: "generate-personal-bio",
        form: [
            {
                label: "Enter Key Information About Yourself",
                field: "textarea",
                name: "info",
                required: true
            }
        ]
    },

    {
        "name": "Event Invitation Generator",
        "desc": "Generate professional invitation messages for events.",
        "category": "Social",
        "icon": "https://cdn-icons-png.flaticon.com/128/4333/4333600.png",
        "aiPrompt": "Create a professional invitation message for an event based on the provided details.",
        "slug": "generate-event-invitation",
        "form": [
            {
                "label": "Enter Event Name",
                "field": "input",
                "name": "eventName",
                "required": true
            },
            {
                "label": "Enter Event Details",
                "field": "textarea",
                "name": "eventDetails",
                "required": true
            }
        ]
    },
    {
        "name": "Press Release Generator",
        "desc": "Create structured press releases based on key information.",
        "category": "Marketing",
        "icon": "https://cdn-icons-png.flaticon.com/128/3271/3271516.png",
        "aiPrompt": "Generate a professional press release based on the provided details.",
        "slug": "generate-press-release",
        "form": [
            {
                "label": "Enter Press Release Topic",
                "field": "input",
                "name": "topic",
                "required": true
            },
            {
                "label": "Enter Key Details",
                "field": "textarea",
                "name": "details",
                "required": true
            }
        ]
    },
    {
        "name": "Slogan Generator",
        "desc": "Generate catchy slogans for your brand or product.",
        "category": "Marketing",
        "icon": "https://cdn-icons-png.flaticon.com/128/2645/2645893.png",
        "aiPrompt": "Create a catchy slogan based on the provided brand or product details.",
        "slug": "generate-slogan",
        "form": [
            {
                "label": "Enter Brand/Product Name",
                "field": "input",
                "name": "brandName",
                "required": true
            },
            {
                "label": "Enter Brand/Product Description",
                "field": "textarea",
                "name": "description",
                "required": true
            }
        ]
    },
    {
        "name": "Ad Copy Generator",
        "desc": "Generate compelling ad copy for your marketing campaigns.",
        "category": "Marketing",
        "icon": "https://cdn-icons-png.flaticon.com/128/4155/4155976.png",
        "aiPrompt": "Write a compelling ad copy for the provided product or service details.",
        "slug": "generate-ad-copy",
        "form": [
            {
                "label": "Enter Product/Service Name",
                "field": "input",
                "name": "productName",
                "required": true
            },
            {
                "label": "Enter Product/Service Description",
                "field": "textarea",
                "name": "description",
                "required": true
            },
            {
                "label": "Enter Target Audience",
                "field": "input",
                "name": "audience",
                "required": false
            }
        ]
    },
    {
        "name": "Case Study Generator",
        "desc": "Generate case study content based on a client success story.",
        "category": "Content",
        "icon": "https://cdn-icons-png.flaticon.com/128/1290/1290277.png",
        "aiPrompt": "Create a structured case study based on the provided success story details.",
        "slug": "generate-case-study",
        "form": [
            {
                "label": "Enter Client Name",
                "field": "input",
                "name": "clientName",
                "required": true
            },
            {
                "label": "Enter Client Problem",
                "field": "textarea",
                "name": "problem",
                "required": true
            },
            {
                "label": "Enter Solution Provided",
                "field": "textarea",
                "name": "solution",
                "required": true
            },
            {
                "label": "Enter Results/Achievements",
                "field": "textarea",
                "name": "results",
                "required": true
            }
        ]
    },
    {
        "name": "Customer Testimonial Generator",
        "desc": "Generate a professional customer testimonial based on customer feedback.",
        "category": "Marketing",
        "icon": "https://cdn-icons-png.flaticon.com/128/1875/1875276.png",
        "aiPrompt": "Create a well-structured customer testimonial based on the provided feedback.",
        "slug": "generate-testimonial",
        "form": [
            {
                "label": "Enter Customer Name",
                "field": "input",
                "name": "customerName",
                "required": true
            },
            {
                "label": "Enter Customer Feedback",
                "field": "textarea",
                "name": "feedback",
                "required": true
            }
        ]
    },
    {
        "name": "Product Tagline Generator",
        "desc": "Generate a catchy tagline for your product or brand.",
        "category": "Marketing",
        "icon": "https://cdn-icons-png.flaticon.com/128/1266/1266012.png",
        "aiPrompt": "Create a catchy and memorable tagline based on the provided product or brand description.",
        "slug": "generate-tagline",
        "form": [
            {
                "label": "Enter Product/Brand Name",
                "field": "input",
                "name": "brandName",
                "required": true
            },
            {
                "label": "Enter Product/Brand Description",
                "field": "textarea",
                "name": "description",
                "required": true
            }
        ]
    },
    {
        "name": "Mission Statement Generator",
        "desc": "Create a strong mission statement for your organization.",
        "category": "Business",
        "icon": "https://cdn-icons-png.flaticon.com/128/201/201623.png",
        "aiPrompt": "Generate a strong mission statement based on the provided organization details.",
        "slug": "generate-mission-statement",
        "form": [
            {
                "label": "Enter Organization Name",
                "field": "input",
                "name": "orgName",
                "required": true
            },
            {
                "label": "Enter Organization Purpose/Goals",
                "field": "textarea",
                "name": "purpose",
                "required": true
            }
        ]
    },
    {
        "name": "Vision Statement Generator",
        "desc": "Generate a clear vision statement for your organization's future.",
        "category": "Business",
        "icon": "https://cdn-icons-png.flaticon.com/128/4431/4431125.png",
        "aiPrompt": "Write a vision statement that clearly describes the future goals of the organization based on the provided details.",
        "slug": "generate-vision-statement",
        "form": [
            {
                "label": "Enter Organization Name",
                "field": "input",
                "name": "orgName",
                "required": true
            },
            {
                "label": "Enter Organization Long-Term Goals",
                "field": "textarea",
                "name": "goals",
                "required": true
            }
        ]
    },
    {
        "name": "Product Description Generator",
        "desc": "Write appealing product descriptions to attract customers.",
        "category": "E-commerce",
        "icon": "https://cdn-icons-png.flaticon.com/128/875/875676.png",
        "aiPrompt": "Generate an attractive product description based on the provided details.",
        "slug": "generate-product-description",
        "form": [
            {
                "label": "Enter Product Name",
                "field": "input",
                "name": "productName",
                "required": true
            },
            {
                "label": "Enter Product Features",
                "field": "textarea",
                "name": "features",
                "required": true
            },
            {
                "label": "Enter Target Audience",
                "field": "input",
                "name": "audience",
                "required": false
            }
        ]
    },
    {
        "name": "Personal Bio Generator",
        "desc": "Create a short bio for your social media or professional profiles.",
        "category": "Personal",
        "icon": "https://cdn-icons-png.flaticon.com/128/1724/1724329.png",
        "aiPrompt": "Write a personal bio based on the provided information.",
        "slug": "generate-bio",
        "form": [
            {
                "label": "Enter Your Name",
                "field": "input",
                "name": "name",
                "required": true
            },
            {
                "label": "Enter Your Profession",
                "field": "input",
                "name": "profession",
                "required": true
            },
            {
                "label": "Enter Your Interests/Hobbies",
                "field": "textarea",
                "name": "interests",
                "required": false
            }
        ]
    },
    {
        "name": "Thank You Note Generator",
        "desc": "Generate thoughtful thank you notes for any occasion.",
        "category": "Social",
        "icon": "https://cdn-icons-png.flaticon.com/128/7603/7603846.png",
        "aiPrompt": "Create a warm thank you note based on the provided details.",
        "slug": "generate-thank-you-note",
        "form": [
            {
                "label": "Enter Recipient's Name",
                "field": "input",
                "name": "recipientName",
                "required": true
            },
            {
                "label": "Enter Reason for Thanking",
                "field": "textarea",
                "name": "reason",
                "required": true
            },
            {
                "label": "Your Name",
                "field": "input",
                "name": "senderName",
                "required": true
            }
        ]
    },
    {
        "name": "Newsletter Content Generator",
        "desc": "Create engaging content for newsletters.",
        "category": "Content",
        "icon": "https://cdn-icons-png.flaticon.com/128/3159/3159310.png",
        "aiPrompt": "Generate newsletter content based on the provided theme and audience.",
        "slug": "generate-newsletter",
        "form": [
            {
                "label": "Enter Newsletter Topic",
                "field": "input",
                "name": "topic",
                "required": true
            },
            {
                "label": "Enter Audience Type",
                "field": "input",
                "name": "audience",
                "required": true
            },
            {
                "label": "Main Message",
                "field": "textarea",
                "name": "message",
                "required": true
            }
        ]
    },
    {
        "name": "Motivational Quote Generator",
        "desc": "Generate motivational quotes to inspire others.",
        "category": "Social",
        "icon": "https://cdn-icons-png.flaticon.com/128/2540/2540465.png",
        "aiPrompt": "Create a motivational quote based on the provided theme or keywords.",
        "slug": "generate-motivational-quote",
        "form": [
            {
                "label": "Enter Theme or Keywords",
                "field": "textarea",
                "name": "theme",
                "required": true
            }
        ]
    },
    {
        "name": "Cover Letter Generator",
        "desc": "Generate a professional cover letter for job applications.",
        "category": "Career",
        "icon": "https://cdn-icons-png.flaticon.com/128/3076/3076526.png",
        "aiPrompt": "Write a professional cover letter based on the provided job and personal information.",
        "slug": "generate-cover-letter",
        "form": [
            {
                "label": "Enter Job Title",
                "field": "input",
                "name": "jobTitle",
                "required": true
            },
            {
                "label": "Enter Company Name",
                "field": "input",
                "name": "companyName",
                "required": true
            },
            {
                "label": "Enter Your Skills/Qualifications",
                "field": "textarea",
                "name": "skills",
                "required": true
            },
            {
                "label": "Your Name",
                "field": "input",
                "name": "yourName",
                "required": true
            }
        ]
    }
]    