/* All terms found in the following link apply: https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE */
const 6969cheat = async () => {
    var t = document.createElement("iframe");
    if (document.body.append(t), window.confirm = t.contentWindow.confirm.bind(window), window.console.log = t.contentWindow.console.log.bind(window), t.style.display = "none", await Object.values(webpackJsonp.push([
            [], {
                "": (e, t, a) => {
                    t.cache = a.c
                }
            },
            [
                [""]
            ]
        ]).cache).find(e => e.exports?.a?.get).exports.a.get("https://" + (location.host.startsWith("dashboard") ? location.host + "/api/games" : "play.blooket.com/api/gamequestionsets") + "?gameId=6368436a976422d8a3f70cd7").then(e => parseInt("0" + e.data.questions.find(e => "../cheats/mobileGui.js" == e.question)?.answers?.[0])) < 1679772168690 || confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/Minesraft2/Blooket-Cheats")) {
        console.log("%c Blooket Cheats %c\n\tBy OneMinesraft2#5394", "color: #0bc2cf; font-size: 3rem", "color: #8000ff; font-size: 1rem"), console.log("%c\tmobileGui.js", "color: #0bc2cf; font-size: 1rem"), console.log("%c\tStar the github repo!%c  https://github.com/Minesraft2/Blooket-Cheats", "color: #ffd000; font-size: 1rem", ""); {
            t = document.createElement("iframe"), t = (document.body.append(t), window.alert = t.contentWindow.alert.bind(window), window.prompt = t.contentWindow.prompt.bind(window), window.confirm = t.contentWindow.confirm.bind(window), t.remove(), (a, e = {}) => Object.entries(e).forEach(([e, t]) => a.style[e] = t));
            (c = document.createElement("style")).innerHTML = "details > summary { cursor: pointer; transition: 0.15s; list-style: none; } details > summary:hover { color: hsl(0, 0%, 50%) } details > summary::-webkit-details-marker { display: none; } details summary ~ * { animation: sweep .5s ease-in-out; } @keyframes sweep { 0%    {opacity: 0; transform: translateY(-10px)} 100%  {opacity: 1; transform: translateY(0)} } .cheat { border: none; background: hsl(0, 0%, 20%); padding: 5px; margin: 3px; width: 60%; color: hsl(0, 0%, 100%); transition: 0.2s; border-radius: 5px; cursor: pointer; } .cheat:hover { background: hsl(0, 0%, 30%); }";
            const v = document.createElement("div");
            [...document.querySelectorAll("#JODMOBILE")].forEach(e => e.remove()), v.id = "JODMOBILE", v.appendChild(c), t(v, {
                width: "400px",
                background: "hsl(0, 0%, 10%)",
                borderRadius: "10px",
                position: "absolute",
                textAlign: "center",
                fontFamily: "Nunito",
                color: "white",
                overflow: "hidden",
                top: "50px",
                left: "50px"
            });
            var n, r, i = 0,
                s = 0,
                c = (v.onpointerdown = (e = window.event) => {
                    e.preventDefault(), i = e.clientX, s = e.clientY, document.onpointerup = () => {
                        document.onpointerup = null, document.onpointermove = null
                    }, document.onpointermove = e => {
                        (e = e || window.event).preventDefault(), n = i - e.clientX, r = s - e.clientY, i = e.clientX, s = e.clientY, v.style.top = v.offsetTop - r + "px", v.style.left = v.offsetLeft - n + "px"
                    }
                }, document.createElement("div")),
                l = (v.appendChild(c), t(c, {
                    width: "100%",
                    height: "35px",
                    paddingTop: "2px",
                    fontSize: "1.5rem",
                    textAlign: "center"
                }), c.innerHTML = 'Blooket Cheats <span style="font-size: 0.75rem">v12.18.22</span>', document.createElement("button")),
                l = (c.appendChild(l), t(l, {
                    background: "red",
                    height: "45px",
                    width: "45px",
                    border: "none",
                    cursor: "pointer",
                    position: "absolute",
                    top: "-10px",
                    right: "-10px",
                    fontSize: "1.5rem",
                    borderRadius: "10px",
                    fontFamily: "Nunito",
                    fontWeight: "bolder",
                    paddingTop: "10px",
                    paddingRight: "15px"
                }), l.innerText = "X", l.onclick = () => {
                    p(), v.remove(), removeEventListener("keypress", h)
                }, document.createElement("button"));
            c.appendChild(l), t(l, {
                background: "#444444",
                height: "45px",
                width: "45px",
                border: "none",
                cursor: "pointer",
                position: "absolute",
                top: "-10px",
                left: "-10px",
                fontSize: "1.5rem",
                borderRadius: "10px",
                fontFamily: "Nunito",
                fontWeight: "bolder",
                paddingTop: "10px",
                paddingLeft: "15px"
            }), l.innerText = "-", l.onclick = () => e.hidden = !e.hidden;
            let e = document.createElement("div"),
                a = (c = document.createElement("div"), e.appendChild(c), v.appendChild(e), c.innerHTML = `<span id="curPageEl">${u(!0)?"Current gamemode: "+u(!0):"No game detected"}</span><br><span>(Press E to hide)</span><br>`, c.style.display = "block", c.style.margin = "10px", document.body.append(v), t = document.createElement("div"), e.appendChild(t), t.style.fontSize = "0.9rem", t.style.paddingBottom = "5px", {
                    global: [{
                        name: "Auto Answer (Toggle)",
                        description: "Toggles auto answer on",
                        type: "toggle",
                        enabled: !(t.innerHTML = '<span><a target="blank" href="https://discord.gg/QznzysxvX4">Made by OneMinesraft2#5394</a></span>'),
                        data: null,
                        run: function() {
                            this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                                const {
                                    state: {
                                        question: a,
                                        stage: e,
                                        feedback: t
                                    },
                                    props: {
                                        client: {
                                            question: o
                                        }
                                    }
                                } = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
                                try {
                                    "typing" != a.qType ? ("feedback" === e || t ? document.querySelector('[class*="feedback"]')?.firstChild : [...document.querySelectorAll('[class*="answerContainer"]')][(a || o).answers.map((e, t) => (a || o).correctAnswers.includes(e) ? t : null).filter(e => null != e)[0]])?.click?.() : Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(a.answers[0])
                                } catch {}
                            }, 50))
                        }
                    }, {
                        name: "Highlight Answers (Toggle)",
                        description: "Toggles highlight answers on",
                        type: "toggle",
                        enabled: !1,
                        data: null,
                        run: function() {
                            this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                                const {
                                    state: a,
                                    props: o
                                } = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
                                [...document.querySelectorAll('[class*="answerContainer"]')].forEach((e, t) => {
                                    (a.question || o.client.question).correctAnswers.includes((a.question || o.client.question).answers[t]) ? e.style.backgroundColor = "rgb(0, 207, 119)" : e.style.backgroundColor = "rgb(189, 15, 38)"
                                })
                            }, 50))
                        }
                    }, {
                        name: "Auto Sell Dupes On Open",
                        description: "Sells the blook you unlock when you open a pack if you already have one (Doesn't sell Legendaries or rarer)",
                        type: "toggle",
                        enabled: !1,
                        data: null,
                        run: function() {
                            this.enabled ? (this.enabled = !1, XMLHttpRequest.prototype.open = this.data) : (this.enabled = !0, this.data = XMLHttpRequest.prototype.open, XMLHttpRequest.prototype._original_open ||= XMLHttpRequest.prototype.open, XMLHttpRequest.prototype.open = function() {
                                this.addEventListener("load", async function() {
                                    try {
                                        var e, t, a, o, n;
                                        "https://dashboard.blooket.com/api/users/unlockblook" === this.responseURL && (e = Object.values(webpackJsonp.push([
                                            [], {
                                                "": (e, t, a) => {
                                                    t.cache = a.c
                                                }
                                            },
                                            [
                                                [""]
                                            ]
                                        ]).cache).find(e => e.exports?.a?.get).exports.a, t = webpackJsonp.push([
                                            [], {
                                                rarity: (e, t, a) => {
                                                    t.rarity = e => a("MDrD").a[e].rarity
                                                }
                                            },
                                            [
                                                ["rarity"]
                                            ]
                                        ])["rarity"], a = JSON.parse(this.response)["unlockedBlook"], {
                                            name: o,
                                            unlocks: n
                                        } = (await e.get("https://dashboard.blooket.com/api/users"))["data"], n[a] && !["Legendary", "Chroma", "Mystical"].includes(t(a))) && (await e.put("https://dashboard.blooket.com/api/users/sellblook", {
                                            name: o,
                                            blook: a,
                                            numSold: 1
                                        }), console.log("Sold duplicate " + a))
                                    } catch {}
                                }), XMLHttpRequest.prototype._original_open.apply(this, arguments)
                            })
                        }
                    }, {
                        name: "Auto Answer",
                        description: "Click the correct answer for you",
                        run: function() {
                            const {
                                state: {
                                    question: a,
                                    stage: e,
                                    feedback: t
                                },
                                props: {
                                    client: {
                                        question: o
                                    }
                                }
                            } = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
                            try {
                                "typing" != a.qType ? ("feedback" === e || t ? document.querySelector('[class*="feedback"]')?.firstChild : [...document.querySelectorAll('[class*="answerContainer"]')][(a || o).answers.map((e, t) => (a || o).correctAnswers.includes(e) ? t : null).filter(e => null != e)[0]])?.click?.() : Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(a.answers[0])
                            } catch {}
                        }
                    }, {
                        name: "Highlight Answers",
                        description: "Colors answers to be red or green highlighting the correct ones",
                        run: function() {
                            const {
                                state: a,
                                props: o
                            } = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
                            [...document.querySelectorAll('[class*="answerContainer"]')].forEach((e, t) => {
                                (a.question || o.client.question).correctAnswers.includes((a.question || o.client.question).answers[t]) ? e.style.backgroundColor = "rgb(0, 207, 119)" : e.style.backgroundColor = "rgb(189, 15, 38)"
                            })
                        }
                    }, {
                        name: "Spam Buy Blooks",
                        description: "Opens a box an amount of times",
                        run: function() {
                            var e = document.createElement("iframe"),
                                d = (document.body.append(e), window.alert = e.contentWindow.alert.bind(window), window.prompt = e.contentWindow.prompt.bind(window), window.confirm = e.contentWindow.confirm.bind(window), e.remove(), Object.values(webpackJsonp.push([
                                    [], {
                                        "": (e, t, a) => {
                                            t.cache = a.c
                                        }
                                    },
                                    [
                                        [""]
                                    ]
                                ]).cache).find(e => e.exports?.a?.get).exports.a);
                            d.get("https://dashboard.blooket.com/api/users").then(async ({
                                data: {
                                    name: e,
                                    tokens: t
                                }
                            }) => {
                                var a = Object.values(webpackJsonp.push([
                                    [], {
                                        "": (e, t, a) => {
                                            t.cache = a.c
                                        }
                                    },
                                    [
                                        [""]
                                    ]
                                ]).cache).find(e => e?.exports?.a?.Safari).exports.a || {
                                    Medieval: 15,
                                    Breakfast: 15,
                                    Wonderland: 15,
                                    Space: 20,
                                    Bot: 20,
                                    Aquatic: 20,
                                    Safari: 20,
                                    Dino: 25,
                                    "Ice Monster": 25
                                };
                                let o = prompt('Which box do you want to open? (ex: "Ice Monster")').split(" ").map(e => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join(" ");
                                if (!Object.keys(a).map(e => e.toLowerCase()).includes(o.toLowerCase())) return alert("I couldn't find that box!");
                                let r = Math.min(Math.floor(t / Object.entries(a).find(e => e[0].toLowerCase() == o.toLowerCase())[1]), parseInt("0" + prompt("How many boxes do you want to open?")));
                                if (0 == r) return alert("You do not have enough tokens!");
                                let i = confirm("Would you like to alert blooks upon unlocking?"),
                                    s = {},
                                    c = Date.now(),
                                    l = !1;
                                for (let n = 0; n < r && (await d.put("https://dashboard.blooket.com/api/users/unlockblook", {
                                        name: e,
                                        box: o
                                    }).then(({
                                        data: {
                                            unlockedBlook: e,
                                            tokens: t,
                                            isNewBlook: a
                                        }
                                    }) => {
                                        s[e] ||= 0, s[e]++;
                                        var o = Date.now();
                                        i && alert(`${e} (${n+1}/${r}) ${a?"NEW! ":""}${t} tokens left`), c += Date.now() - o
                                    }).catch(e => l = !0), !l); n++);
                                alert(`(${Date.now()-c}ms) Results:\n` + Object.entries(s).map(([e, t]) => `    ${e} ` + t).join(`\n`))
                            }).catch(() => alert("There was an error user data!"))
                        }
                    }, {
                        name: "Remove Name Limit",
                        description: "Sets the name limit to 120, which is the actual max name length limit",
                        run: function() {
                            var e = document.createElement("iframe");
                            document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), document.querySelector('input[class*="nameInput"]').maxLength = 120, alert("Removed name length limit")
                        }
                    }, {
                        name: "Remove Random Name",
                        description: "Allows you to put a custom name",
                        run: function() {
                            Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.setState({
                                isRandom: !1,
                                client: {
                                    name: ""
                                }
                            }), document.querySelector('[class*="nameInput"]')?.focus?.()
                        }
                    }, {
                        name: "Sell Cheap Duplicates",
                        description: "Sells all of your uncommon to epic dupes (not legendaries+)",
                        run: function() {
                            var e = document.createElement("iframe"),
                                r = (document.body.append(e), window.alert = e.contentWindow.alert.bind(window), window.confirm = e.contentWindow.confirm.bind(window), e.remove(), Object.values(webpackJsonp.push([
                                    [], {
                                        "": (e, t, a) => {
                                            t.cache = a.c
                                        }
                                    },
                                    [
                                        [""]
                                    ]
                                ]).cache).find(e => e.exports?.a?.get).exports.a);
                            r.get("https://dashboard.blooket.com/api/users").then(async ({
                                data: {
                                    name: e,
                                    unlocks: t
                                }
                            }) => {
                                t = Object.entries(t).filter(([e, t]) => 1 < t && !["Legendary", "Chroma", "Mystical"].includes(webpackJsonp.push([
                                    [], {
                                        [1234]: (e, t, a) => {
                                            t.webpack = a
                                        }
                                    },
                                    [
                                        ["1234"]
                                    ]
                                ]).webpack("MDrD").a[e].rarity));
                                if (confirm("Are you sure you want to sell your uncommon to epic dupes?")) {
                                    var a, o, n = Date.now();
                                    for ([a, o] of t) await r.put("https://dashboard.blooket.com/api/users/sellblook", {
                                        name: e,
                                        blook: a,
                                        numSold: o - 1
                                    });
                                    alert(`(${Date.now()-n}ms) Results:\n` + t.map(([e, t]) => `    ${e} ` + (t - 1)).join(`\n`))
                                }
                            }).catch(() => alert("There was an error user data!"))
                        }
                    }, {
                        name: "Sell Duplicate Blooks",
                        description: "Sell all duplicate blooks leaving you with 1 each",
                        run: function() {
                            var e = document.createElement("iframe"),
                                r = (document.body.append(e), window.alert = e.contentWindow.alert.bind(window), window.confirm = e.contentWindow.confirm.bind(window), e.remove(), Object.values(webpackJsonp.push([
                                    [], {
                                        "": (e, t, a) => {
                                            t.cache = a.c
                                        }
                                    },
                                    [
                                        [""]
                                    ]
                                ]).cache).find(e => e.exports?.a?.get).exports.a);
                            r.get("https://dashboard.blooket.com/api/users").then(async ({
                                data: {
                                    name: e,
                                    unlocks: t
                                }
                            }) => {
                                t = Object.entries(t).filter(e => 1 < e[1]);
                                if (confirm("Are you sure you want to sell your dupes?")) {
                                    var a, o, n = Date.now();
                                    for ([a, o] of t) await r.put("https://dashboard.blooket.com/api/users/sellblook", {
                                        name: e,
                                        blook: a,
                                        numSold: o - 1
                                    });
                                    alert(`(${Date.now()-n}ms) Results:\n` + t.map(([e, t]) => `    ${e} ` + (t - 1)).join(`\n`))
                                }
                            }).catch(() => alert("There was an error user data!"))
                        }
                    }, {
                        name: "Every Answer Correct",
                        description: "Sets every answer to be correct",
                        run: function() {
                            var e = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
                            e.freeQuestions = e.questions = e.props.client.questions.map(e => ({
                                ...e,
                                correctAnswers: e.answers
                            }))
                        }
                    }, {
                        name: "Flood Game",
                        description: "Floods a game with a number of fake accounts",
                        run: async function() {
                            var e = document.createElement("iframe");
                            document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove();
                            const n = prompt("Game ID:"),
                                r = prompt("Name:");
                            var t = parseInt(prompt("Amount:")),
                                e = webpackJsonp.push([
                                    [], {
                                        [1234]: (e, t, a) => {
                                            t.webpack = a
                                        }
                                    },
                                    [
                                        ["1234"]
                                    ]
                                ])["webpack"];
                            const i = Object.values(e.c).find(e => e.exports?.a?.get).exports.a,
                                s = Object.values(e.c).find(e => e.exports?.a?.initializeApp).exports.a;
                            for (let o = 1; o <= t; o++)(async () => {
                                var {
                                    success: e,
                                    fbToken: t,
                                    fbShardURL: a
                                } = (await i.put("https://fb.blooket.com/c/firebase/join", {
                                    id: n,
                                    name: "" + r + o
                                }))["data"];
                                e && (e = s.initializeApp({
                                    apiKey: "AIzaSyCA-cTOnX19f6LFnDVVsHXya3k6ByP_MnU",
                                    authDomain: "blooket-2020.firebaseapp.com",
                                    projectId: "blooket-2020",
                                    storageBucket: "blooket-2020.appspot.com",
                                    messagingSenderId: "741533559105",
                                    appId: "1:741533559105:web:b8cbb10e6123f2913519c0",
                                    measurementId: "G-S3H5NGN10Z",
                                    databaseURL: a
                                }, "" + r + o), await (a = s.auth(e)).setPersistence(s.auth.Auth.Persistence.NONE).catch(console.error), await a.signInWithCustomToken(t).catch(console.error), await e.database().ref(n + "/c/" + r + o).set({
                                    b: "Black"
                                }), e.delete())
                            })(), await new Promise(e => setTimeout(e, 100))
                        }
                    }, {
                        name: "Get Daily Rewards",
                        description: "Gets max daily tokens and xp",
                        run: function() {
                            var a, e = document.createElement("iframe");
                            document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), location.href.includes("play.blooket.com") ? (a = Object.values(webpackJsonp.push([
                                [], {
                                    "": (e, t, a) => {
                                        t.cache = a.c
                                    }
                                },
                                [
                                    [""]
                                ]
                            ]).cache).find(e => e.exports?.a?.get).exports.a).post("https://play.blooket.com/api/playersessions/solo", {
                                gameMode: "Factory"
                            }).then(({
                                data: {
                                    t
                                }
                            }) => {
                                a.get("https://play.blooket.com/api/users/me").then(({
                                    data: {
                                        name: e
                                    }
                                }) => {
                                    a.put("https://play.blooket.com/api/users/add-rewards", {
                                        t: t,
                                        name: e,
                                        addedTokens: 500,
                                        addedXp: 300
                                    }).then(({
                                        data: {
                                            dailyReward: e
                                        }
                                    }) => alert(`Added max tokens and xp, and got ${e} daily wheel tokens!`)).catch(() => alert("There was an error when adding rewards."))
                                }).catch(() => alert("There was an error user data."))
                            }) : (alert("This cheat only works on play.blooket.com, opening a new tab."), window.open("https://play.blooket.com/"))
                        }
                    }, {
                        name: "Simulate Pack",
                        description: "Simulate opening a pack",
                        run: function() {
                            let h = webpackJsonp.push([
                                [], {
                                    [1234]: (e, t, a) => {
                                        t.webpack = a
                                    }
                                },
                                [
                                    ["1234"]
                                ]
                            ])["webpack"];
                            var t = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
                            let r = h("fGzD");
                            r = Object.keys(r.a).reduce((e, t) => (e.packs.includes(t) && (e.data[t] = Object.fromEntries(r.b(t))), e), {
                                packs: Array.from(document.querySelectorAll('[class*="packShadow"]')).map(e => e.alt),
                                data: {}
                            }).data;
                            var a = prompt('Which box do you want to simulate? (ex: "Ice Monster")').split(" ").map(e => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join(" ");
                            if (r[a]) {
                                a = function(e) {
                                    var t = [],
                                        a = Object.keys(r[e]);
                                    for (const n of a) t.push(r[e][n] + (t[a.indexOf(n) - 1] || 0));
                                    const o = t[t.length - 1] * Math.random();
                                    return a[t.findIndex(e => e >= o)]
                                }(a);
                                let e = Object.values(h.c).find(e => e.exports?.Class).exports,
                                    u = {};
                                class n extends e.Scene {
                                    constructor(e) {
                                        super(), this.rarity = e.toLowerCase()
                                    }
                                    preload() {
                                        switch (this.rarity) {
                                            case "uncommon":
                                                this.load.svg("uncommon-1", "https://media.blooket.com/image/upload/v1658567787/Media/market/particles/square_green.svg", {
                                                    width: 25,
                                                    height: 25
                                                }), this.load.svg("uncommon-2", "https://media.blooket.com/image/upload/v1658567787/Media/market/particles/square_light_green.svg", {
                                                    width: 25,
                                                    height: 25
                                                }), this.load.svg("uncommon-3", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/circle_dark_green.svg", {
                                                    width: 25,
                                                    height: 25
                                                }), this.load.svg("uncommon-4", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/serpentine_dark_green.svg", {
                                                    width: 30,
                                                    height: 30
                                                }), this.load.svg("uncommon-5", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/triangle_light_green.svg", {
                                                    width: 30,
                                                    height: 30
                                                }), this.load.svg("uncommon-6", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/serpentine_light_green.svg", {
                                                    width: 30,
                                                    height: 30
                                                }), this.load.svg("uncommon-7", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/triangle_green.svg", {
                                                    width: 30,
                                                    height: 30
                                                });
                                                break;
                                            case "rare":
                                                this.load.svg("rare-1", "https://media.blooket.com/image/upload/v1658567765/Media/market/particles/square_light_blue.svg", {
                                                    width: 25,
                                                    height: 25
                                                }), this.load.svg("rare-2", "https://media.blooket.com/image/upload/v1658567765/Media/market/particles/square_dark_blue.svg", {
                                                    width: 25,
                                                    height: 25
                                                }), this.load.svg("rare-3", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/triangle_blue.svg", {
                                                    width: 30,
                                                    height: 30
                                                }), this.load.svg("rare-4", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/serpentine_blue.svg", {
                                                    width: 30,
                                                    height: 30
                                                }), this.load.svg("rare-5", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/triangle_light_blue.svg", {
                                                    width: 30,
                                                    height: 30
                                                }), this.load.svg("rare-6", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/serpentine_light_blue.svg", {
                                                    width: 30,
                                                    height: 30
                                                }), this.load.svg("rare-7", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/circle_dark_blue.svg", {
                                                    width: 25,
                                                    height: 25
                                                });
                                                break;
                                            case "epic":
                                                this.load.svg("epic-1", "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/red.svg", {
                                                    width: 25,
                                                    height: 25
                                                }), this.load.svg("epic-2", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/light_red.svg", {
                                                    width: 25,
                                                    height: 25
                                                }), this.load.svg("epic-3", "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/serpentine_red.svg", {
                                                    width: 30,
                                                    height: 30
                                                }), this.load.svg("epic-4", "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/serpentine_dark_red.svg", {
                                                    width: 30,
                                                    height: 30
                                                }), this.load.svg("epic-5", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/triangle_red.svg", {
                                                    width: 30,
                                                    height: 30
                                                }), this.load.svg("epic-6", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/triangle_light_red.svg", {
                                                    width: 30,
                                                    height: 30
                                                }), this.load.svg("epic-7", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/circle_dark_red.svg", {
                                                    width: 25,
                                                    height: 25
                                                });
                                                break;
                                            case "legendary":
                                                this.load.svg("legendary-1", "https://media.blooket.com/image/upload/v1658567740/Media/market/particles/square_orange.svg", {
                                                    width: 25,
                                                    height: 25
                                                }), this.load.svg("legendary-2", "https://media.blooket.com/image/upload/v1658567740/Media/market/particles/square_light_orange.svg", {
                                                    width: 25,
                                                    height: 25
                                                }), this.load.svg("legendary-3", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/circle_orange.svg", {
                                                    width: 25,
                                                    height: 25
                                                }), this.load.svg("legendary-4", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/serpentine_orange.svg", {
                                                    width: 30,
                                                    height: 30
                                                }), this.load.svg("legendary-5", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/serpentine_light_orange.svg", {
                                                    width: 30,
                                                    height: 30
                                                }), this.load.svg("legendary-6", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/circle_dark_orange.svg", {
                                                    width: 25,
                                                    height: 25
                                                }), this.load.svg("legendary-7", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/triangle_dark_orange.svg", {
                                                    width: 30,
                                                    height: 30
                                                });
                                                break;
                                            case "chroma":
                                                this.load.svg("chroma-1", "https://media.blooket.com/image/upload/v1658790246/Media/market/particles/square_turquoise.svg", {
                                                    width: 25,
                                                    height: 25
                                                }), this.load.svg("chroma-2", "https://media.blooket.com/image/upload/v1658790246/Media/market/particles/square_light_turquoise.svg", {
                                                    width: 25,
                                                    height: 25
                                                }), this.load.svg("chroma-3", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/serpentine_dark_turquoise.svg", {
                                                    width: 30,
                                                    height: 30
                                                }), this.load.svg("chroma-4", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/serpentine_turquoise.svg", {
                                                    width: 30,
                                                    height: 30
                                                }), this.load.svg("chroma-5", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/triangle_turquoise.svg", {
                                                    width: 30,
                                                    height: 30
                                                }), this.load.svg("chroma-6", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/triangle_light_turquoise.svg", {
                                                    width: 30,
                                                    height: 30
                                                }), this.load.svg("chroma-7", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/circle_dark_turquoise.svg", {
                                                    width: 25,
                                                    height: 25
                                                })
                                        }
                                    }
                                    create() {
                                        u.scene = this, u.rarity = "", u.particles = this.physics.add.group({
                                            classType: new e.Class({
                                                Extends: e.GameObjects.Image,
                                                initialize: function() {
                                                    e.GameObjects.Image.call(this, u.scene, 0, 0, "uncommon-1"), this.setDepth(3), this.lifespan = 0
                                                },
                                                spawn: function(e, t, a, o, n, r, i, s, c) {
                                                    this.setTexture(c), this.setActive(!0), this.setVisible(!0), this.setPosition(e, t), this.setScale(a), this.targets = [], u.scene.physics.velocityFromAngle(o, n, this.body.velocity), this.body.setGravityY(r), this.body.setAngularVelocity(i), this.lifespan = s
                                                },
                                                update: function(e, t) {
                                                    this.lifespan -= t, 0 < this.lifespan || (this.setActive(!1), this.setVisible(!1))
                                                }
                                            }),
                                            runChildUpdate: !0
                                        }), this.nextParticle = 0, this.numExplosions = 0, this.game.events.on("start-particles", e => {
                                            u.rarity = e, this.numExplosions = "Uncommon" === e ? 75 : "Rare" === e ? 100 : -1
                                        })
                                    }
                                    update(e, t) {
                                        const a = h("74sb");

                                        function o(e) {
                                            switch (e) {
                                                case "center":
                                                    var t = Object(a.l)(-115, -65);
                                                    return {
                                                        x: u.scene.cameras.main.worldView.width / 2, y: u.scene.cameras.main.worldView.height / 2, scale: Object(a.l)(.7, 1), angle: t, velocity: Object(a.l)(600, 750), gravity: 700, angVelocity: (-90 < t ? 1 : -1) * Object(a.l)(125, 175), lifespan: 2500
                                                    };
                                                case "right-bottom":
                                                    return {
                                                        x: u.scene.cameras.main.worldView.width, y: u.scene.cameras.main.worldView.height, scale: Object(a.l)(.7, 1), angle: Object(a.l)(-160, -110), velocity: Object(a.l)(600, 750), gravity: 500, angVelocity: Object(a.l)(-175, -125), lifespan: 2500
                                                    };
                                                case "left-bottom":
                                                    return {
                                                        x: 0, y: u.scene.cameras.main.worldView.height, scale: Object(a.l)(.7, 1), angle: Object(a.l)(-70, -20), velocity: Object(a.l)(600, 750), gravity: 500, angVelocity: Object(a.l)(125, 175), lifespan: 2500
                                                    };
                                                case "top":
                                                    return {
                                                        x: Object(a.l)(0, u.scene.cameras.main.worldView.width), y: -50, scale: Object(a.l)(.7, 1), angle: 90, velocity: Object(a.l)(0, 50), gravity: 700, angVelocity: Object(a.l)(-150, 150), lifespan: 2500
                                                    };
                                                case "right-shower":
                                                    return {
                                                        x: u.scene.cameras.main.worldView.width, y: Object(a.l)(0, u.scene.cameras.main.worldView.height), scale: Object(a.l)(.7, 1), angle: Object(a.l)(-180, -130), velocity: Object(a.l)(600, 750), gravity: 500, angVelocity: Object(a.l)(-175, -125), lifespan: 2500
                                                    };
                                                case "left-shower":
                                                    return {
                                                        x: 0, y: Object(a.l)(0, u.scene.cameras.main.worldView.height), scale: Object(a.l)(.7, 1), angle: Object(a.l)(-50, 0), velocity: Object(a.l)(600, 750), gravity: 500, angVelocity: Object(a.l)(125, 175), lifespan: 2500
                                                    };
                                                case "right-diamond":
                                                    t = Object(a.l)(0, u.scene.cameras.main.worldView.height);
                                                    return {
                                                        x: u.scene.cameras.main.worldView.width, y: t, scale: Object(a.l)(.7, 1), angle: t > u.scene.cameras.main.worldView.height / 2 ? -150 : -210, velocity: Object(a.l)(600, 750), gravity: 0, angVelocity: Object(a.l)(-175, -125), lifespan: 2500
                                                    };
                                                case "left-diamond":
                                                    t = Object(a.l)(0, u.scene.cameras.main.worldView.height);
                                                    return {
                                                        x: 0, y: t, scale: Object(a.l)(.7, 1), angle: t > u.scene.cameras.main.worldView.height / 2 ? -30 : 30, velocity: Object(a.l)(600, 750), gravity: 0, angVelocity: Object(a.l)(125, 175), lifespan: 2500
                                                    };
                                                default:
                                                    return {}
                                            }
                                        }
                                        if (u.rarity && 0 !== this.numExplosions && (this.nextParticle -= t, this.nextParticle <= 0)) {
                                            switch (u.rarity) {
                                                case "Uncommon":
                                                    for (let e = 0; e < 2; e++) {
                                                        var n = u.particles.get();
                                                        n && n.spawn.apply(n, Object.values(o("center")).concat("uncommon-" + Object(a.m)(1, 8)))
                                                    }
                                                    break;
                                                case "Rare":
                                                    for (var r = 0; r < 2; r++) {
                                                        var i = u.particles.get();
                                                        i && i.spawn.apply(i, Object.values(o(r % 2 == 0 ? "left-bottom" : "right-bottom")).concat("rare-" + Object(a.m)(1, 8)))
                                                    }
                                                    break;
                                                case "Epic":
                                                    for (var s = 0; s < 2; s++) {
                                                        var c = u.particles.get();
                                                        c && c.spawn.apply(c, Object.values(o(s % 2 == 0 ? "left-shower" : "right-shower")).concat("epic-" + Object(a.m)(1, 8)))
                                                    }
                                                    break;
                                                case "Legendary":
                                                    for (var l = 0; l < 3; l++) {
                                                        var d = u.particles.get();
                                                        d && d.spawn.apply(d, Object.values(o("top")).concat("legendary-" + Object(a.m)(1, 8)))
                                                    }
                                                    break;
                                                case "Chroma":
                                                    for (var p = 0; p < 3; p++) {
                                                        var m = u.particles.get();
                                                        m && m.spawn.apply(m, Object.values(o(p % 2 == 0 ? "left-diamond" : "right-diamond")).concat("chroma-" + Object(a.m)(1, 8)))
                                                    }
                                            }
                                            this.nextParticle = 20, 0 < this.numExplosions && (this.numExplosions = Math.max(this.numExplosions - 1, 0))
                                        }
                                    }
                                }
                                var o = Object.values(h.c).find(e => e.exports?.a?.Elephant).exports.a;
                                t.setState({
                                    loadingPack: !1,
                                    openPack: !0,
                                    unlockedBlook: a,
                                    tokens: t.state.tokens,
                                    newUnlock: !0,
                                    game: {
                                        type: e.WEBGL,
                                        parent: "phaser-market",
                                        width: "100%",
                                        height: "100%",
                                        scale: {
                                            mode: e.Scale.NONE,
                                            autoCenter: e.Scale.CENTER_BOTH
                                        },
                                        transparent: !0,
                                        physics: {
                                            default: "arcade"
                                        },
                                        scene: new n(o[a].rarity)
                                    },
                                    canOpen: !0
                                })
                            } else alert("I couldn't find that box!")
                        }
                    }, {
                        name: "Simulate Unlock",
                        description: "Simulate unlocking most of the blooks",
                        run: function() {
                            var t = document.createElement("iframe");
                            if (document.body.append(t), window.alert = t.contentWindow.alert.bind(window), window.prompt = t.contentWindow.prompt.bind(window), t.remove(), "/market" == window.location.pathname) {
                                let u = webpackJsonp.push([
                                    [], {
                                        [1234]: (e, t, a) => {
                                            t.webpack = a
                                        }
                                    },
                                    [
                                        ["1234"]
                                    ]
                                ])["webpack"];
                                t = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
                                let e = Object.values(u.c).find(e => e.exports?.Class).exports,
                                    h = new function() {
                                        this.scene = null, this.particles = null, this.rarity = null
                                    };
                                class n extends e.Scene {
                                    constructor(e) {
                                        super(), this.rarity = e.toLowerCase()
                                    }
                                    preload() {
                                        switch (this.rarity) {
                                            case "uncommon":
                                                this.load.svg("uncommon-1", "https://media.blooket.com/image/upload/v1658567787/Media/market/particles/square_green.svg", {
                                                    width: 25,
                                                    height: 25
                                                }), this.load.svg("uncommon-2", "https://media.blooket.com/image/upload/v1658567787/Media/market/particles/square_light_green.svg", {
                                                    width: 25,
                                                    height: 25
                                                }), this.load.svg("uncommon-3", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/circle_dark_green.svg", {
                                                    width: 25,
                                                    height: 25
                                                }), this.load.svg("uncommon-4", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/serpentine_dark_green.svg", {
                                                    width: 30,
                                                    height: 30
                                                }), this.load.svg("uncommon-5", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/triangle_light_green.svg", {
                                                    width: 30,
                                                    height: 30
                                                }), this.load.svg("uncommon-6", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/serpentine_light_green.svg", {
                                                    width: 30,
                                                    height: 30
                                                }), this.load.svg("uncommon-7", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/triangle_green.svg", {
                                                    width: 30,
                                                    height: 30
                                                });
                                                break;
                                            case "rare":
                                                this.load.svg("rare-1", "https://media.blooket.com/image/upload/v1658567765/Media/market/particles/square_light_blue.svg", {
                                                    width: 25,
                                                    height: 25
                                                }), this.load.svg("rare-2", "https://media.blooket.com/image/upload/v1658567765/Media/market/particles/square_dark_blue.svg", {
                                                    width: 25,
                                                    height: 25
                                                }), this.load.svg("rare-3", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/triangle_blue.svg", {
                                                    width: 30,
                                                    height: 30
                                                }), this.load.svg("rare-4", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/serpentine_blue.svg", {
                                                    width: 30,
                                                    height: 30
                                                }), this.load.svg("rare-5", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/triangle_light_blue.svg", {
                                                    width: 30,
                                                    height: 30
                                                }), this.load.svg("rare-6", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/serpentine_light_blue.svg", {
                                                    width: 30,
                                                    height: 30
                                                }), this.load.svg("rare-7", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/circle_dark_blue.svg", {
                                                    width: 25,
                                                    height: 25
                                                });
                                                break;
                                            case "epic":
                                                this.load.svg("epic-1", "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/red.svg", {
                                                    width: 25,
                                                    height: 25
                                                }), this.load.svg("epic-2", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/light_red.svg", {
                                                    width: 25,
                                                    height: 25
                                                }), this.load.svg("epic-3", "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/serpentine_red.svg", {
                                                    width: 30,
                                                    height: 30
                                                }), this.load.svg("epic-4", "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/serpentine_dark_red.svg", {
                                                    width: 30,
                                                    height: 30
                                                }), this.load.svg("epic-5", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/triangle_red.svg", {
                                                    width: 30,
                                                    height: 30
                                                }), this.load.svg("epic-6", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/triangle_light_red.svg", {
                                                    width: 30,
                                                    height: 30
                                                }), this.load.svg("epic-7", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/circle_dark_red.svg", {
                                                    width: 25,
                                                    height: 25
                                                });
                                                break;
                                            case "legendary":
                                                this.load.svg("legendary-1", "https://media.blooket.com/image/upload/v1658567740/Media/market/particles/square_orange.svg", {
                                                    width: 25,
                                                    height: 25
                                                }), this.load.svg("legendary-2", "https://media.blooket.com/image/upload/v1658567740/Media/market/particles/square_light_orange.svg", {
                                                    width: 25,
                                                    height: 25
                                                }), this.load.svg("legendary-3", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/circle_orange.svg", {
                                                    width: 25,
                                                    height: 25
                                                }), this.load.svg("legendary-4", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/serpentine_orange.svg", {
                                                    width: 30,
                                                    height: 30
                                                }), this.load.svg("legendary-5", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/serpentine_light_orange.svg", {
                                                    width: 30,
                                                    height: 30
                                                }), this.load.svg("legendary-6", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/circle_dark_orange.svg", {
                                                    width: 25,
                                                    height: 25
                                                }), this.load.svg("legendary-7", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/triangle_dark_orange.svg", {
                                                    width: 30,
                                                    height: 30
                                                });
                                                break;
                                            case "chroma":
                                                this.load.svg("chroma-1", "https://media.blooket.com/image/upload/v1658790246/Media/market/particles/square_turquoise.svg", {
                                                    width: 25,
                                                    height: 25
                                                }), this.load.svg("chroma-2", "https://media.blooket.com/image/upload/v1658790246/Media/market/particles/square_light_turquoise.svg", {
                                                    width: 25,
                                                    height: 25
                                                }), this.load.svg("chroma-3", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/serpentine_dark_turquoise.svg", {
                                                    width: 30,
                                                    height: 30
                                                }), this.load.svg("chroma-4", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/serpentine_turquoise.svg", {
                                                    width: 30,
                                                    height: 30
                                                }), this.load.svg("chroma-5", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/triangle_turquoise.svg", {
                                                    width: 30,
                                                    height: 30
                                                }), this.load.svg("chroma-6", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/triangle_light_turquoise.svg", {
                                                    width: 30,
                                                    height: 30
                                                }), this.load.svg("chroma-7", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/circle_dark_turquoise.svg", {
                                                    width: 25,
                                                    height: 25
                                                })
                                        }
                                    }
                                    create() {
                                        h.scene = this, h.rarity = "", h.particles = this.physics.add.group({
                                            classType: new e.Class({
                                                Extends: e.GameObjects.Image,
                                                initialize: function() {
                                                    e.GameObjects.Image.call(this, h.scene, 0, 0, "uncommon-1"), this.setDepth(3), this.lifespan = 0
                                                },
                                                spawn: function(e, t, a, o, n, r, i, s, c) {
                                                    this.setTexture(c), this.setActive(!0), this.setVisible(!0), this.setPosition(e, t), this.setScale(a), this.targets = [], h.scene.physics.velocityFromAngle(o, n, this.body.velocity), this.body.setGravityY(r), this.body.setAngularVelocity(i), this.lifespan = s
                                                },
                                                update: function(e, t) {
                                                    this.lifespan -= t, 0 < this.lifespan || (this.setActive(!1), this.setVisible(!1))
                                                }
                                            }),
                                            runChildUpdate: !0
                                        }), this.nextParticle = 0, this.numExplosions = 0, this.game.events.on("start-particles", e => {
                                            h.rarity = e, this.numExplosions = "Uncommon" === e ? 75 : "Rare" === e ? 100 : -1
                                        })
                                    }
                                    update(e, t) {
                                        const a = u("74sb");

                                        function o(e) {
                                            switch (e) {
                                                case "center":
                                                    var t = Object(a.l)(-115, -65);
                                                    return {
                                                        x: h.scene.cameras.main.worldView.width / 2, y: h.scene.cameras.main.worldView.height / 2, scale: Object(a.l)(.7, 1), angle: t, velocity: Object(a.l)(600, 750), gravity: 700, angVelocity: (-90 < t ? 1 : -1) * Object(a.l)(125, 175), lifespan: 2500
                                                    };
                                                case "right-bottom":
                                                    return {
                                                        x: h.scene.cameras.main.worldView.width, y: h.scene.cameras.main.worldView.height, scale: Object(a.l)(.7, 1), angle: Object(a.l)(-160, -110), velocity: Object(a.l)(600, 750), gravity: 500, angVelocity: Object(a.l)(-175, -125), lifespan: 2500
                                                    };
                                                case "left-bottom":
                                                    return {
                                                        x: 0, y: h.scene.cameras.main.worldView.height, scale: Object(a.l)(.7, 1), angle: Object(a.l)(-70, -20), velocity: Object(a.l)(600, 750), gravity: 500, angVelocity: Object(a.l)(125, 175), lifespan: 2500
                                                    };
                                                case "top":
                                                    return {
                                                        x: Object(a.l)(0, h.scene.cameras.main.worldView.width), y: -50, scale: Object(a.l)(.7, 1), angle: 90, velocity: Object(a.l)(0, 50), gravity: 700, angVelocity: Object(a.l)(-150, 150), lifespan: 2500
                                                    };
                                                case "right-shower":
                                                    return {
                                                        x: h.scene.cameras.main.worldView.width, y: Object(a.l)(0, h.scene.cameras.main.worldView.height), scale: Object(a.l)(.7, 1), angle: Object(a.l)(-180, -130), velocity: Object(a.l)(600, 750), gravity: 500, angVelocity: Object(a.l)(-175, -125), lifespan: 2500
                                                    };
                                                case "left-shower":
                                                    return {
                                                        x: 0, y: Object(a.l)(0, h.scene.cameras.main.worldView.height), scale: Object(a.l)(.7, 1), angle: Object(a.l)(-50, 0), velocity: Object(a.l)(600, 750), gravity: 500, angVelocity: Object(a.l)(125, 175), lifespan: 2500
                                                    };
                                                case "right-diamond":
                                                    t = Object(a.l)(0, h.scene.cameras.main.worldView.height);
                                                    return {
                                                        x: h.scene.cameras.main.worldView.width, y: t, scale: Object(a.l)(.7, 1), angle: t > h.scene.cameras.main.worldView.height / 2 ? -150 : -210, velocity: Object(a.l)(600, 750), gravity: 0, angVelocity: Object(a.l)(-175, -125), lifespan: 2500
                                                    };
                                                case "left-diamond":
                                                    t = Object(a.l)(0, h.scene.cameras.main.worldView.height);
                                                    return {
                                                        x: 0, y: t, scale: Object(a.l)(.7, 1), angle: t > h.scene.cameras.main.worldView.height / 2 ? -30 : 30, velocity: Object(a.l)(600, 750), gravity: 0, angVelocity: Object(a.l)(125, 175), lifespan: 2500
                                                    };
                                                default:
                                                    return {}
                                            }
                                        }
                                        if (h.rarity && 0 !== this.numExplosions && (this.nextParticle -= t, this.nextParticle <= 0)) {
                                            switch (h.rarity) {
                                                case "Uncommon":
                                                    for (let e = 0; e < 2; e++) {
                                                        var n = h.particles.get();
                                                        n && n.spawn.apply(n, Object.values(o("center")).concat("uncommon-" + Object(a.m)(1, 8)))
                                                    }
                                                    break;
                                                case "Rare":
                                                    for (var r = 0; r < 2; r++) {
                                                        var i = h.particles.get();
                                                        i && i.spawn.apply(i, Object.values(o(r % 2 == 0 ? "left-bottom" : "right-bottom")).concat("rare-" + Object(a.m)(1, 8)))
                                                    }
                                                    break;
                                                case "Epic":
                                                    for (var s = 0; s < 2; s++) {
                                                        var c = h.particles.get();
                                                        c && c.spawn.apply(c, Object.values(o(s % 2 == 0 ? "left-shower" : "right-shower")).concat("epic-" + Object(a.m)(1, 8)))
                                                    }
                                                    break;
                                                case "Legendary":
                                                    for (var l = 0; l < 3; l++) {
                                                        var d = h.particles.get();
                                                        d && d.spawn.apply(d, Object.values(o("top")).concat("legendary-" + Object(a.m)(1, 8)))
                                                    }
                                                    break;
                                                case "Chroma":
                                                    for (var p = 0; p < 3; p++) {
                                                        var m = h.particles.get();
                                                        m && m.spawn.apply(m, Object.values(o(p % 2 == 0 ? "left-diamond" : "right-diamond")).concat("chroma-" + Object(a.m)(1, 8)))
                                                    }
                                            }
                                            this.nextParticle = 20, 0 < this.numExplosions && (this.numExplosions = Math.max(this.numExplosions - 1, 0))
                                        }
                                    }
                                }
                                var a = Object.entries(Object.values(u.c).find(e => Object.values(e.exports?.a || {})[0]?.set).exports.a).reduce((e, t) => (Object.values(u.c).find(e => 15 == e.exports.a?.Breakfast).exports.a[t[1].realSet || t[1].set] && (e[t[0]] = t[1]), e), {}),
                                    o = prompt("What blook do you want to simulate opening? (Case Sensitive)");
                                Object.keys(a).includes(o) ? t.setState({
                                    loadingPack: !1,
                                    openPack: !0,
                                    unlockedBlook: o,
                                    tokens: t.state.tokens,
                                    newUnlock: !0,
                                    game: {
                                        type: e.WEBGL,
                                        parent: "phaser-market",
                                        width: "100%",
                                        height: "100%",
                                        scale: {
                                            mode: e.Scale.NONE,
                                            autoCenter: e.Scale.CENTER_BOTH
                                        },
                                        transparent: !0,
                                        physics: {
                                            default: "arcade"
                                        },
                                        scene: new n(a[o].rarity)
                                    },
                                    canOpen: !0
                                }) : o && alert("Invalid blook! Make sure you spelled and capitalized it properly, the blook also needs a buyable pack in the market.")
                            } else alert("This can only be ran on the market page!")
                        }
                    }, {
                        name: "Use Any Blook",
                        description: "Allows you to play as any blook",
                        run: function() {
                            const a = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
                            var e = webpackJsonp.push([
                                [], {
                                    [1234]: (e, t, a) => {
                                        t.webpack = a
                                    }
                                },
                                [
                                    ["1234"]
                                ]
                            ]).webpack("MDrD").a;
                            "/blooks" == location.pathname ? a.setState({
                                blookData: Object.keys(e).reduce((e, t) => (e[t] = a.state.blookData[t] || 1, e), {}),
                                allSets: Object.values(e).reduce((e, t) => e.includes(t.set) ? e : e.concat(t.set), [])
                            }) : Array.isArray(a.state.unlocks) ? a.setState({
                                unlocks: Object.keys(e)
                            }) : a.setState({
                                unlocks: e
                            })
                        }
                    }, {
                        name: "Unlock Plus Gamemodes",
                        description: "Allows you to play any gamemode that is plus only",
                        run: function() {
                            Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.setState(e => (e.gameModes.forEach(e => e.plusOnly = !1), e))
                        }
                    }],
                    brawl: [{
                        name: "Double Enemy XP",
                        description: "Doubles enemy XP drop value",
                        run: function() {
                            for (const a of Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.game.scene.physics.world.colliders._active.filter(e => e.callbackContext?.toString().includes("invulnerableTime"))) {
                                var t = a.object2;
                                let e = t.classType.prototype.start;
                                t.classType.prototype.start = function() {
                                    e.apply(this, arguments), this.val *= 2
                                }, t.children.entries.forEach(e => e.val *= 2)
                            }
                        }
                    }, {
                        name: "Half Enemy Speed",
                        description: "Makes enemies move 2x slower",
                        run: function() {
                            for (const a of Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.game.scene.physics.world.colliders._active.filter(e => e.callbackContext?.toString().includes("invulnerableTime"))) {
                                var t = a.object2;
                                let e = t.classType.prototype.start;
                                t.classType.prototype.start = function() {
                                    e.apply(this, arguments), this.speed *= .5
                                }, t.children.entries.forEach(e => e.speed *= .5)
                            }
                        }
                    }, {
                        name: "Instant Kill",
                        description: "Sets all enemies health to 1",
                        run: function() {
                            for (const a of Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.game.scene.physics.world.colliders._active.filter(e => e.callbackContext?.toString().includes("invulnerableTime"))) {
                                var t = a.object2;
                                let e = t.classType.prototype.start;
                                t.classType.prototype.start = function() {
                                    e.apply(this, arguments), this.hp = 1
                                }, t.children.entries.forEach(e => e.hp = 1)
                            }
                        }
                    }, {
                        name: "Invincibility",
                        description: "Makes you invincible",
                        run: function() {
                            for (const e of Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.game.scene.physics.world.colliders._active.filter(e => e.callbackContext?.toString().includes("invulnerableTime"))) e.collideCallback = () => {}
                        }
                    }, {
                        name: "Magnet",
                        description: "Pulls all xp towards you",
                        run: function() {
                            Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.game.scene.physics.world.colliders._active.find(e => e.collideCallback?.toString().includes("magnetTime")).collideCallback({
                                active: !0
                            }, {
                                active: !0,
                                setActive() {},
                                setVisible() {}
                            })
                        }
                    }, {
                        name: "Max Current Abilities",
                        description: "Maxes out all your current abilities",
                        run: function() {
                            const a = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
                            for (var [t, o] of Object.entries(a.state.abilities))
                                for (let e = 0; e < 10 - o; e++) a.state.game.scene.game.events.emit("level up", t, a.state.abilities[t]++);
                            a.setState({
                                level: a.state.game.scene.level = [1, 3, 5, 10, 15, 25, 35].sort((e, t) => Math.abs(e - a.state.level) - Math.abs(t - a.state.level))[0] - 1
                            })
                        }
                    }, {
                        name: "Next Level",
                        description: "Skips to the next level",
                        run: function() {
                            var e = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"],
                                {
                                    object1: t,
                                    object2: a
                                } = e.state.game.scene.physics.world.colliders._active.find(e => e.collideCallback?.toString().includes('emit("xp"'));
                            a.get().spawn(t.x, t.y, (1 === (a = e.state.level) ? 1 : a < 5 ? 5 : a < 10 ? 10 : a < 20 ? 20 : a < 30 ? 30 : a < 40 ? 40 : a < 50 ? 50 : 100) - e.xp)
                        }
                    }, {
                        name: "Remove Obstacles",
                        description: "Removes all rocks and obstacles",
                        run: function() {
                            Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.game.scene.physics.world.bodies.entries.forEach(e => {
                                try {
                                    e.gameObject.frame.texture.key.includes("obstacle") && e.gameObject.destroy()
                                } catch {}
                            })
                        }
                    }, {
                        name: "Kill Enemies",
                        description: "Kills all current enemies",
                        run: function() {
                            Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.game.scene.physics.world.bodies.entries.forEach(e => e?.gameObject?.receiveDamage?.(e.gameObject.hp, 1))
                        }
                    }, {
                        name: "Reset Health",
                        description: "Resets health and gives invincibility for 3 seconds",
                        run: function() {
                            Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.game.scene.game.events._events.respawn.fn()
                        }
                    }],
                    cafe: [{
                        name: "Max Items",
                        description: "Maxes out items in the shop (Only usable in the shop)",
                        run: function() {
                            var e = document.createElement("iframe");
                            document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), "/cafe/shop" !== window.location.pathname ? alert("This can only be run in the shop") : (e = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"], e.setState({
                                items: Object.fromEntries(Object.entries(e.state.items).map(e => [e[0], 5]))
                            }))
                        }
                    }, {
                        name: "Remove Customers",
                        description: "Skips the current customers (Not usable in the shop)",
                        run: function() {
                            const a = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
                            a.state.customers.forEach((e, t) => Object.keys(e).length && a.removeCustomer(t, !0))
                        }
                    }, {
                        name: "Reset Abilities",
                        description: "Resets used abilities in shop (Only usable in the shop)",
                        run: function() {
                            var e = document.createElement("iframe");
                            document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), "/cafe/shop" !== window.location.pathname ? alert("This can only be run in the shop") : (e = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"], e.setState({
                                abilities: Object.fromEntries(Object.entries(e.state.abilities).map(e => [e[0], 5]))
                            }))
                        }
                    }, {
                        name: "Set Cash",
                        description: "Sets cafe cash",
                        run: function() {
                            var e = document.createElement("iframe"),
                                e = (document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Number(parseInt(prompt("How much cash would you like?")))),
                                t = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
                            t.setState({
                                cafeCash: e
                            }), t.props.liveGameController.setVal({
                                path: "c/" + t.props.client.name,
                                val: {
                                    b: t.props.client.blook,
                                    ca: e
                                }
                            })
                        }
                    }, {
                        name: "Stock Food",
                        description: "Stocks all food to 99 (Not usable in the shop)",
                        run: function() {
                            var e = document.createElement("iframe");
                            document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), "/cafe" !== window.location.pathname ? alert("This can't be run in the shop") : (e = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"], e.setState({
                                foods: e.state.foods.map(e => ({
                                    ...e,
                                    stock: 99,
                                    level: 5
                                }))
                            }))
                        }
                    }],
                    hack: [{
                        name: "Choice ESP",
                        description: "Shows what each choice will give you",
                        type: "toggle",
                        enabled: !1,
                        data: null,
                        run: function() {
                            this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                                var e, t = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"],
                                    t = t.state.choices[0]["text"],
                                    a = document.querySelector("[class^=styles__feedbackContainer___]");
                                a.children.length <= 4 && ((e = document.createElement("div")).style.color = "white", e.style.fontFamily = "Inconsolata,Helvetica,monospace,sans-serif", e.style.fontSize = "2em", e.style.display = "flex", e.style.justifyContent = "center", e.style.marginTop = "675px", e.innerText = t, a.append(e))
                            }, 50))
                        }
                    }, {
                        name: "Password ESP",
                        description: "Highlights the correct password",
                        type: "toggle",
                        enabled: !1,
                        data: null,
                        run: function() {
                            this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                                let t = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode["state"];
                                "hack" == t.stage && [...document.querySelector("div[class^=styles__buttonContainer]").children].forEach(e => {
                                    e.innerText != t.correctPassword && (e.style.outlineColor = "rgba(255, 64, 64, 0.8)", e.style.backgroundColor = "rgba(255, 64, 64, 0.8)", e.style.textShadow = "0 0 1px #f33")
                                })
                            }, 50))
                        }
                    }, {
                        name: "Always Triple",
                        description: "Always get triple crypto",
                        type: "toggle",
                        enabled: !1,
                        data: null,
                        run: function() {
                            this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.setState({
                                choices: [{
                                    type: "mult",
                                    val: 3,
                                    rate: .075,
                                    blook: "Brainy Bot",
                                    text: "Triple Crypto"
                                }]
                            }), 50))
                        }
                    }, {
                        name: "Auto Guess",
                        description: "Automatically guess the correct password",
                        type: "toggle",
                        enabled: !1,
                        data: null,
                        run: function() {
                            this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                                var e = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode["state"];
                                if ("hack" == e.stage)
                                    for (const t of document.querySelector("div[class^=styles__buttonContainer]").children) t.innerText == e.correctPassword && t.click()
                            }, 50))
                        }
                    }, {
                        name: "Remove Hack",
                        description: "",
                        run: function() {
                            Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.setState({
                                hack: ""
                            })
                        }
                    }, {
                        name: "Set Crypto",
                        description: "Sets crypto",
                        run: function() {
                            var e = document.createElement("iframe"),
                                e = (document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Number(parseInt(prompt("How much crypto would you like?")))),
                                t = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
                            t.setState({
                                crypto: e,
                                crypto2: e
                            }), t.props.liveGameController.setVal({
                                path: "c/".concat(t.props.client.name),
                                val: {
                                    b: t.props.client.blook,
                                    p: t.state.password,
                                    cr: e
                                }
                            })
                        }
                    }, {
                        name: "Set Password",
                        description: "Sets hacking password",
                        run: function() {
                            var e = document.createElement("iframe"),
                                e = (document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), prompt("What do you want to set your password to?")),
                                t = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
                            t.setState({
                                password: e
                            }), t.props.liveGameController.setVal({
                                path: "c/".concat(t.props.client.name),
                                val: {
                                    b: t.props.client.blook,
                                    p: e,
                                    cr: t.state.crypto
                                }
                            })
                        }
                    }, {
                        name: "Steal Player's Crypto",
                        description: "Steals all of someone's crypto",
                        run: function() {
                            var e = document.createElement("iframe");
                            document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove();
                            let o = prompt("Who's crypto would you like to steal?"),
                                n = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
                            n.props.liveGameController.getDatabaseVal("c", e => {
                                var t, a;
                                e && Object.keys(e).map(e => e.toLowerCase()).includes(o.toLowerCase()) && ([t, {
                                    cr: a
                                }] = Object.entries(e).find(([e]) => e.toLowerCase() == o.toLowerCase()), console.log(!!e, e, t, a, n.state), n.setState({
                                    crypto: n.state.crypto + a,
                                    crypto2: n.state.crypto + a
                                }), n.props.liveGameController.setVal({
                                    path: "c/".concat(n.props.client.name),
                                    val: {
                                        b: n.props.client.blook,
                                        p: n.state.password,
                                        cr: n.state.crypto + a,
                                        tat: t + ":" + a
                                    }
                                }), console.log("done"))
                            })
                        }
                    }],
                    defense: [{
                        name: "Earthquake",
                        description: "Shuffles around towers",
                        run: function() {
                            let o = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"],
                                n = (o.setState({
                                    eventName: "Earthquake",
                                    event: {
                                        short: "e",
                                        color: "#805500",
                                        icon: "fas fa-mountain",
                                        desc: "All of your towers get mixed up",
                                        rate: .02
                                    },
                                    buyTowerName: "",
                                    buyTower: {}
                                }, () => o.eventTimeout = setTimeout(() => o.setState({
                                    event: {},
                                    eventName: ""
                                }), 6e3)), o.tiles.forEach(a => a.forEach((e, t) => 3 === e && (a[t] = 0))), o.tiles.flatMap((e, a) => e.map((e, t) => 0 === e && {
                                    x: t,
                                    y: a
                                })).filter(Boolean).sort(() => .5 - Math.random()));
                            o.towers.forEach(e => {
                                var {
                                    x: t,
                                    y: a
                                } = n.shift();
                                e.move(t, a, o.tileSize), o.tiles[a][t] = 3
                            })
                        }
                    }, {
                        name: "Max Tower Stats",
                        description: "Makes all placed towers overpowered",
                        run: function() {
                            var e = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
                            e.towers.forEach(e => {
                                e.range = 100, e.fullCd = e.cd = 0, e.damage = 1e6
                            })
                        }
                    }, {
                        name: "Remove Ducks",
                        description: "Removes ducks",
                        run: function() {
                            let {
                                ducks: e,
                                tiles: t
                            } = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
                            e.forEach(e => {
                                t[e.y][e.x] = 0
                            }), e.length = 0
                        }
                    }, {
                        name: "Remove Enemies",
                        description: "Removes all the enemies",
                        run: function() {
                            var e = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
                            e.enemies = e.futureEnemies = []
                        }
                    }, {
                        name: "Remove Obstacles",
                        description: "Lets you place towers anywhere",
                        run: function() {
                            var e = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
                            e.tiles = e.tiles.map(e => e.fill(0))
                        }
                    }, {
                        name: "Set Damage",
                        description: "Sets damage",
                        run: function() {
                            var e = document.createElement("iframe");
                            document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.dmg = Number(parseInt(prompt("How much dmg would you like?")))
                        }
                    }, {
                        name: "Set Round",
                        description: "Sets the current round",
                        run: function() {
                            var e = document.createElement("iframe");
                            document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.setState({
                                round: Number(parseInt(prompt("What round do you want to set to?")))
                            })
                        }
                    }, {
                        name: "Set Tokens",
                        description: "Sets the amount of tokens you have",
                        run: function() {
                            var e = document.createElement("iframe");
                            document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.setState({
                                tokens: Number(parseInt(prompt("How many tokens would you like?")))
                            })
                        }
                    }],
                    defense2: [{
                        name: "Max Tower Stats",
                        description: "Makes all placed towers overpowered",
                        run: function() {
                            Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.towers.forEach(e => {
                                if (e.stats.dmg = 1e6, e.stats.fireRate = 50, e.stats.ghostDetect = !0, e.stats.maxTargets = 1e6, e.stats.numProjectiles &&= 100, e.stats.range = 100, e.stats.auraBuffs)
                                    for (const t in e.stats.auraBuffs) e.stats.auraBuffs[t] *= 100
                            })
                        }
                    }, {
                        name: "Kill Enemies",
                        description: "Kills all the enemies",
                        run: function() {
                            var e = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
                            e.state.game.scene.enemyQueue.length = 0, e.state.game.scene.physics.world.bodies.entries.forEach(e => e?.gameObject?.receiveDamage?.(e.gameObject.hp, 1))
                        }
                    }, {
                        name: "Set Coins",
                        description: "Sets coins",
                        run: function() {
                            var e = document.createElement("iframe");
                            document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.setState({
                                coins: Number(parseInt(prompt("How many tokens would you like?")))
                            })
                        }
                    }, {
                        name: "Set Health",
                        description: "Sets the amount of health you have",
                        run: function(e) {
                            var t = document.createElement("iframe");
                            document.body.append(t), window.prompt = t.contentWindow.prompt.bind(window), t.remove(), Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.setState({
                                health: Number(parseInt(prompt("How much health do you want?")))
                            })
                        }
                    }, {
                        name: "Set Round",
                        description: "Sets the current round",
                        run: function(e) {
                            var t = document.createElement("iframe");
                            document.body.append(t), window.prompt = t.contentWindow.prompt.bind(window), t.remove(), Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.setState({
                                round: Number(parseInt(prompt("What round do you want to set to?")))
                            })
                        }
                    }],
                    dinos: [{
                        name: "Auto Choose",
                        description: "Automatically choose the best fossil when excavating",
                        type: "toggle",
                        enabled: !1,
                        data: null,
                        run: function() {
                            this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                                const t = webpackJsonp.push([
                                    [], {
                                        [1234]: (e, t, a) => {
                                            t.webpack = a
                                        }
                                    },
                                    [
                                        ["1234"]
                                    ]
                                ])["webpack"];
                                var e = (() => {
                                    const e = Object.values(t("74sb")).find(e => e.toString().includes("rate"));
                                    return () => e([{
                                        type: "fossil",
                                        val: 10,
                                        rate: .1,
                                        blook: "Amber"
                                    }, {
                                        type: "fossil",
                                        val: 25,
                                        rate: .1,
                                        blook: "Dino Egg"
                                    }, {
                                        type: "fossil",
                                        val: 50,
                                        rate: .175,
                                        blook: "Dino Fossil"
                                    }, {
                                        type: "fossil",
                                        val: 75,
                                        rate: .175,
                                        blook: "Stegosaurus"
                                    }, {
                                        type: "fossil",
                                        val: 100,
                                        rate: .15,
                                        blook: "Velociraptor"
                                    }, {
                                        type: "fossil",
                                        val: 125,
                                        rate: .125,
                                        blook: "Brontosaurus"
                                    }, {
                                        type: "fossil",
                                        val: 250,
                                        rate: .075,
                                        blook: "Triceratops"
                                    }, {
                                        type: "fossil",
                                        val: 500,
                                        rate: .025,
                                        blook: "Tyrannosaurus Rex"
                                    }, {
                                        type: "mult",
                                        val: 1.5,
                                        rate: .05
                                    }, {
                                        type: "mult",
                                        val: 2,
                                        rate: .025
                                    }], 3)
                                })();
                                try {
                                    var o = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
                                    if ("excavate" === o.state.stage) {
                                        o.state.choices.length || (o.state.choices = e());
                                        let t = 0,
                                            a = -1;
                                        for (let e = 0; e < o.state.choices.length; e++) {
                                            var {
                                                type: n,
                                                val: r
                                            } = o.state.choices[e], i = ("fossil" == n ? o.state.fossils + r * o.state.fossilMult : o.state.fossils * r) || 0;
                                            i <= t && "mult" != n || (t = i, a = e + 1)
                                        }
                                        document.querySelector('div[class^="styles__rockRow"] > div[role="button"]:nth-child(' + a + ")").click()
                                    }
                                } catch {}
                            }, 50))
                        }
                    }, {
                        name: "Rock ESP",
                        description: "Shows what is under the rocks",
                        type: "toggle",
                        enabled: !1,
                        data: null,
                        run: function() {
                            this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                                let o = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
                                const e = [...document.querySelector('[class*="rockButton"]').parentElement.children];
                                e.every(e => e.querySelector("div")) || o.setState({
                                    choices: [{
                                        type: "fossil",
                                        val: 10,
                                        rate: .1,
                                        blook: "Amber"
                                    }, {
                                        type: "fossil",
                                        val: 25,
                                        rate: .1,
                                        blook: "Dino Egg"
                                    }, {
                                        type: "fossil",
                                        val: 50,
                                        rate: .175,
                                        blook: "Dino Fossil"
                                    }, {
                                        type: "fossil",
                                        val: 75,
                                        rate: .175,
                                        blook: "Stegosaurus"
                                    }, {
                                        type: "fossil",
                                        val: 100,
                                        rate: .15,
                                        blook: "Velociraptor"
                                    }, {
                                        type: "fossil",
                                        val: 125,
                                        rate: .125,
                                        blook: "Brontosaurus"
                                    }, {
                                        type: "fossil",
                                        val: 250,
                                        rate: .075,
                                        blook: "Triceratops"
                                    }, {
                                        type: "fossil",
                                        val: 500,
                                        rate: .025,
                                        blook: "Tyrannosaurus Rex"
                                    }, {
                                        type: "mult",
                                        val: 1.5,
                                        rate: .05
                                    }, {
                                        type: "mult",
                                        val: 2,
                                        rate: .025
                                    }].sort(() => .5 - Math.random()).slice(0, 3)
                                }, () => {
                                    e.forEach((e, t) => {
                                        var t = o.state.choices[t],
                                            a = (e.querySelector("div") && e.querySelector("div").remove(), document.createElement("div"));
                                        a.style.color = "white", a.style.fontFamily = "Macondo", a.style.fontSize = "1em", a.style.display = "flex", a.style.justifyContent = "center", a.style.transform = "translateY(25px)", a.innerText = "fossil" === t.type ? `+${99999999<Math.round(t.val*o.state.fossilMult)?Object.values(webpack("74sb")).find(e=>e.toString().includes("×"))(Math.round(t.val*o.state.fossilMult)):Math.round(t.val*o.state.fossilMult)} Fossils` : `x${t.val} Fossils Per Excavation`, e.append(a)
                                    })
                                })
                            }, 50))
                        }
                    }, {
                        name: "Set Fossils",
                        description: "Sets the amount of fossils you have",
                        run: function() {
                            var e = document.createElement("iframe"),
                                e = (document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Number(parseInt(prompt("How many fossils would you like?")))),
                                t = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
                            t.setState({
                                fossils: e
                            }), t.props.liveGameController.setVal({
                                path: "c/" + t.props.client.name,
                                val: {
                                    b: t.props.client.blook,
                                    f: e,
                                    ic: t.state.isCheating
                                }
                            })
                        }
                    }, {
                        name: "Set Multiplier",
                        description: "Sets fossil multiplier",
                        run: function() {
                            var e = document.createElement("iframe"),
                                e = (document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Number(parseInt(prompt("What do you want your multiplier to be?")))),
                                t = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
                            t.setState({
                                fossilMult: e
                            })
                        }
                    }, {
                        name: "Stop Cheating",
                        description: "Undoes cheating so that you can't be caught",
                        run: function() {
                            var e = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
                            e.setState({
                                isCheating: !1
                            }), e.props.liveGameController.setVal({
                                path: `c/${e.props.client.name}/ic`,
                                val: !1
                            })
                        }
                    }],
                    doom: [{
                        name: "Fill Deck",
                        description: "Fills your deck with every maxed out card and artifact (Only works on towers page)",
                        run: function() {
                            var e = document.createElement("iframe");
                            if (document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), "/tower/map" == window.location.pathname) {
                                var {
                                    a: e,
                                    c: t
                                } = webpackJsonp.push([
                                    [], {
                                        "": (e, t, a) => {
                                            t.cache = a.c
                                        }
                                    },
                                    [
                                        [""]
                                    ]
                                ]).cache.gvfT.exports, a = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
                                a.props.tower.artifacts = Object.keys(e), a.props.tower.cards = Object.entries(t).map(([e, t]) => ({
                                    ...t,
                                    blook: e,
                                    strength: 20,
                                    charisma: 20,
                                    wisdom: 20
                                }));
                                try {
                                    a.props.addTowerNode()
                                } catch {}
                                a.setState({
                                    showDeck: !1
                                })
                            } else alert("You need to be on the map to run this cheat!")
                        }
                    }, {
                        name: "Max Cards",
                        description: "Maxes out all the cards in your deck",
                        run: function() {
                            var e = document.createElement("iframe");
                            document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), "/tower/map" == window.location.pathname ? (e = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"], e.props.tower.cards.forEach(e => {
                                e.strength = 20, e.charisma = 20, e.wisdom = 20
                            })) : alert("You need to be on the map to run this cheat!")
                        }
                    }, {
                        name: "Max Health",
                        description: "Fills the player's health",
                        run: function() {
                            var e = document.createElement("iframe");
                            document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), "/tower/battle" == window.location.pathname ? Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.setState({
                                myHealth: 100
                            }) : alert("You need to be in battle to run this cheat!")
                        }
                    }, {
                        name: "Max Card Stats",
                        description: "Maxes out player's current card (Only works on attribute select page)",
                        run: function() {
                            var e = document.createElement("iframe"),
                                e = (document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner)["stateNode"];
                            "select" !== e.state.phase ? alert("You must be on the attribute selection page!") : e.setState({
                                myCard: {
                                    ...e.state.myCard,
                                    strength: 20,
                                    charisma: 20,
                                    wisdom: 20
                                }
                            })
                        }
                    }, {
                        name: "Min Enemy Stats",
                        description: "Makes the enemy card stats all 0 (Only works on attribute select page)",
                        run: function() {
                            var e = document.createElement("iframe"),
                                e = (document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner)["stateNode"];
                            "select" !== e.state.phase ? alert("You must be on the attribute selection page!") : e.setState({
                                enemyCard: {
                                    ...e.state.enemyCard,
                                    strength: 0,
                                    charisma: 0,
                                    wisdom: 0
                                }
                            })
                        }
                    }, {
                        name: "Set Coins",
                        description: "Try's to set amount of tower coins you have",
                        run: function() {
                            var e = document.createElement("iframe");
                            if (document.body.append(e), window.alert = e.contentWindow.prompt.bind(window), e.remove(), "/tower/battle" == window.location.pathname) {
                                var e = parseInt("0" + alert("How many coins would you like?")),
                                    t = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
                                try {
                                    t.props.setTowerCoins(e)
                                } catch {}
                            } else alert("You need to be in battle to run this cheat!")
                        }
                    }],
                    factory: [{
                        name: "Choose Blook",
                        description: "Gives you a blook",
                        run: function() {
                            var e = document.createElement("iframe"),
                                e = (document.body.append(e), window.alert = e.contentWindow.alert.bind(window), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"]),
                                t = [{
                                    name: "Chick",
                                    color: "#ffcd05",
                                    class: "🌽",
                                    rarity: "Common",
                                    cash: [3, 7, 65, 400, 2500],
                                    time: [1, 1, 1, 1, 1],
                                    price: [300, 3e3, 3e4, 2e5]
                                }, {
                                    name: "Chicken",
                                    color: "#ed1c24",
                                    class: "🌽",
                                    rarity: "Common",
                                    cash: [10, 40, 200, 1400, 1e4],
                                    time: [5, 4, 3, 2, 1],
                                    price: [570, 4e3, 5e4, 8e5]
                                }, {
                                    name: "Cow",
                                    color: "#58595b",
                                    class: "🌽",
                                    rarity: "Common",
                                    cash: [25, 75, 1500, 25e3, 25e4],
                                    time: [15, 10, 10, 10, 5],
                                    price: [500, 9500, 16e4, 4e6]
                                }, {
                                    name: "Duck",
                                    color: "#4ab96d",
                                    class: "🌽",
                                    rarity: "Common",
                                    cash: [4, 24, 200, 3e3, 4e4],
                                    time: [3, 3, 3, 3, 3],
                                    price: [450, 4200, 7e4, 11e5]
                                }, {
                                    name: "Goat",
                                    color: "#c59a74",
                                    class: "🌽",
                                    rarity: "Common",
                                    cash: [5, 28, 200, 1300, 12e3],
                                    time: [3, 3, 2, 2, 2],
                                    price: [500, 6400, 45e3, 5e5]
                                }, {
                                    name: "Horse",
                                    color: "#995b3c",
                                    class: "🌽",
                                    rarity: "Common",
                                    cash: [5, 20, 270, 1800, 15e3],
                                    time: [2, 2, 2, 2, 2],
                                    price: [550, 8200, 65e3, 6e5]
                                }, {
                                    name: "Pig",
                                    color: "#f6a9cb",
                                    class: "🌽",
                                    rarity: "Common",
                                    cash: [20, 50, 1300, 8e3, 8e4],
                                    time: [7, 7, 7, 7, 5],
                                    price: [400, 11e3, 8e4, 13e5]
                                }, {
                                    name: "Sheep",
                                    color: "#414042",
                                    class: "🌽",
                                    rarity: "Common",
                                    cash: [6, 25, 250, 1500, 11e3],
                                    time: [3, 3, 3, 2, 2],
                                    price: [500, 5e3, 5e4, 43e4]
                                }, {
                                    name: "Cat",
                                    color: "#f49849",
                                    class: "🐾",
                                    rarity: "Common",
                                    cash: [5, 18, 170, 1700, 13e3],
                                    time: [2, 2, 2, 2, 2],
                                    price: [480, 5500, 6e4, 5e5]
                                }, {
                                    name: "Dog",
                                    color: "#995b3c",
                                    class: "🐾",
                                    rarity: "Common",
                                    cash: [7, 25, 220, 1900, 9e3],
                                    time: [3, 3, 2, 2, 1],
                                    price: [460, 6600, 7e4, 73e4]
                                }, {
                                    name: "Goldfish",
                                    color: "#f18221",
                                    class: "🐾",
                                    rarity: "Common",
                                    cash: [5, 40, 350, 3500, 35e3],
                                    time: [3, 3, 3, 3, 3],
                                    price: [750, 7200, 84e3, 95e4]
                                }, {
                                    name: "Rabbit",
                                    color: "#e7bf9a",
                                    class: "🐾",
                                    rarity: "Common",
                                    cash: [3, 18, 185, 800, 7e3],
                                    time: [2, 2, 2, 1, 1],
                                    price: [500, 5800, 56e3, 55e4]
                                }, {
                                    name: "Hamster",
                                    color: "#ce9176",
                                    class: "🐾",
                                    rarity: "Common",
                                    cash: [10, 45, 450, 4500, 45e3],
                                    time: [4, 4, 4, 4, 4],
                                    price: [650, 6500, 8e4, 93e4]
                                }, {
                                    name: "Turtle",
                                    color: "#619a3c",
                                    class: "🐾",
                                    rarity: "Common",
                                    cash: [23, 120, 1400, 15e3, 17e4],
                                    time: [10, 10, 10, 10, 10],
                                    price: [700, 8500, 11e4, 13e5]
                                }, {
                                    name: "Puppy",
                                    color: "#414042",
                                    class: "🐾",
                                    rarity: "Common",
                                    cash: [4, 10, 75, 500, 3e3],
                                    time: [1, 1, 1, 1, 1],
                                    price: [450, 4e3, 35e3, 25e4]
                                }, {
                                    name: "Kitten",
                                    color: "#58595b",
                                    class: "🐾",
                                    rarity: "Common",
                                    cash: [4, 8, 60, 400, 2e3],
                                    time: [1, 1, 1, 1, 1],
                                    price: [350, 3500, 26e3, 17e4]
                                }, {
                                    name: "Bear",
                                    color: "#995b3c",
                                    class: "🌲",
                                    rarity: "Common",
                                    cash: [12, 70, 550, 4500, 1e5],
                                    time: [7, 7, 6, 5, 5],
                                    price: [550, 5500, 63e3, 16e5]
                                }, {
                                    name: "Moose",
                                    color: "#995b3c",
                                    class: "🌲",
                                    rarity: "Common",
                                    cash: [8, 45, 400, 3500, 26e3],
                                    time: [5, 5, 4, 4, 3],
                                    price: [520, 6500, 58e3, 7e5]
                                }, {
                                    name: "Fox",
                                    color: "#f49849",
                                    class: "🌲",
                                    rarity: "Common",
                                    cash: [7, 15, 80, 550, 3e3],
                                    time: [2, 2, 1, 1, 1],
                                    price: [400, 4e3, 36e3, 24e4]
                                }, {
                                    name: "Raccoon",
                                    color: "#6d6e71",
                                    class: "🌲",
                                    rarity: "Common",
                                    cash: [5, 14, 185, 1900, 19e3],
                                    time: [2, 2, 2, 2, 2],
                                    price: [400, 5e3, 71e3, 8e5]
                                }, {
                                    name: "Squirrel",
                                    color: "#d25927",
                                    class: "🌲",
                                    rarity: "Common",
                                    cash: [3, 10, 65, 470, 2600],
                                    time: [1, 1, 1, 1, 1],
                                    price: [420, 3600, 32e3, 21e4]
                                }, {
                                    name: "Owl",
                                    color: "#594a42",
                                    class: "🌲",
                                    rarity: "Common",
                                    cash: [4, 17, 155, 1500, 15e3],
                                    time: [2, 2, 2, 2, 2],
                                    price: [500, 4800, 55e3, 58e4]
                                }, {
                                    name: "Hedgehog",
                                    color: "#3f312b",
                                    class: "🌲",
                                    rarity: "Common",
                                    cash: [11, 37, 340, 2200, 3e4],
                                    time: [5, 4, 3, 2, 2],
                                    price: [540, 7e3, 77e3, 12e5]
                                }, {
                                    name: "Seal",
                                    color: "#7ca1d5",
                                    class: "❄️",
                                    rarity: "Common",
                                    cash: [6, 17, 150, 1200, 13e3],
                                    time: [2, 2, 2, 2, 2],
                                    price: [480, 4500, 43e3, 52e4]
                                }, {
                                    name: "Arctic Fox",
                                    color: "#7ca1d5",
                                    class: "❄️",
                                    rarity: "Common",
                                    cash: [5, 18, 180, 850, 8500],
                                    time: [2, 2, 2, 1, 1],
                                    price: [520, 550, 61e3, 68e4]
                                }, {
                                    name: "Snowy Owl",
                                    color: "#feda3f",
                                    class: "❄️",
                                    rarity: "Common",
                                    cash: [5, 20, 190, 1900, 16e3],
                                    time: [3, 3, 2, 2, 2],
                                    price: [370, 5300, 76e3, 62e4]
                                }, {
                                    name: "Arctic Hare",
                                    color: "#7ca1d5",
                                    class: "❄️",
                                    rarity: "Common",
                                    cash: [6, 19, 85, 900, 7e3],
                                    time: [2, 2, 1, 1, 1],
                                    price: [540, 5200, 66e3, 55e4]
                                }, {
                                    name: "Penguin",
                                    color: "#fb8640",
                                    class: "❄️",
                                    rarity: "Common",
                                    cash: [4, 21, 310, 3200, 33e3],
                                    time: [3, 3, 3, 3, 3],
                                    price: [400, 6500, 76e3, 87e4]
                                }, {
                                    name: "Baby Penguin",
                                    color: "#414042",
                                    class: "❄️",
                                    rarity: "Common",
                                    cash: [3, 8, 70, 450, 2700],
                                    time: [1, 1, 1, 1, 1],
                                    price: [420, 3300, 33e3, 23e4]
                                }, {
                                    name: "Polar Bear",
                                    color: "#7ca1d5",
                                    class: "❄️",
                                    rarity: "Common",
                                    cash: [12, 75, 700, 6500, 85e3],
                                    time: [8, 7, 6, 5, 5],
                                    price: [630, 7e3, 91e3, 14e5]
                                }, {
                                    name: "Walrus",
                                    color: "#7d4f33",
                                    class: "❄️",
                                    rarity: "Common",
                                    cash: [11, 46, 420, 3700, 51e3],
                                    time: [5, 5, 4, 4, 4],
                                    price: [550, 6200, 68e3, 1e6]
                                }, {
                                    name: "Tiger",
                                    color: "#f18221",
                                    class: "🌴",
                                    rarity: "Common",
                                    cash: [6, 20, 100, 975, 7500],
                                    time: [3, 3, 1, 1, 1],
                                    price: [390, 6e3, 7e4, 61e4]
                                }, {
                                    name: "Jaguar",
                                    color: "#fbb040",
                                    class: "🌴",
                                    rarity: "Common",
                                    cash: [8, 28, 230, 1600, 17e3],
                                    time: [3, 3, 2, 2, 2],
                                    price: [390, 6e3, 7e4, 61e4]
                                }, {
                                    name: "Toucan",
                                    color: "#ffca34",
                                    class: "🌴",
                                    rarity: "Common",
                                    cash: [9, 20, 175, 625, 3800],
                                    time: [2, 2, 2, 1, 1],
                                    price: [520, 4800, 42e3, 3e5]
                                }, {
                                    name: "Cockatoo",
                                    color: "#7ca1d5",
                                    class: "🌴",
                                    rarity: "Common",
                                    cash: [6, 35, 160, 1700, 18e3],
                                    time: [4, 4, 2, 2, 2],
                                    price: [500, 5e3, 63e3, 7e5]
                                }, {
                                    name: "Macaw",
                                    color: "#00aeef",
                                    class: "🌴",
                                    rarity: "Common",
                                    cash: [3, 8, 85, 850, 8500],
                                    time: [1, 1, 1, 1, 1],
                                    price: [480, 5400, 62e3, 63e4]
                                }, {
                                    name: "Parrot",
                                    color: "#ed1c24",
                                    class: "🌴",
                                    rarity: "Common",
                                    cash: [3, 9, 90, 900, 9e3],
                                    time: [1, 1, 1, 1, 1],
                                    price: [540, 5700, 65e3, 69e4]
                                }, {
                                    name: "Panther",
                                    color: "#2f2c38",
                                    class: "🌴",
                                    rarity: "Common",
                                    cash: [12, 28, 215, 2100, 21e3],
                                    time: [5, 3, 2, 2, 2],
                                    price: [530, 6500, 76e3, 87e4]
                                }, {
                                    name: "Anaconda",
                                    color: "#8a9143",
                                    class: "🌴",
                                    rarity: "Common",
                                    cash: [3, 15, 85, 1500, 7600],
                                    time: [1, 2, 1, 2, 1],
                                    price: [410, 5100, 58e3, 59e4]
                                }, {
                                    name: "Orangutan",
                                    color: "#bc6234",
                                    class: "🌴",
                                    rarity: "Common",
                                    cash: [13, 52, 570, 4300, 7e4],
                                    time: [5, 5, 5, 4, 4],
                                    price: [600, 7e3, 8e4, 14e5]
                                }, {
                                    name: "Capuchin",
                                    color: "#e0b0a6",
                                    class: "🌴",
                                    rarity: "Common",
                                    cash: [4, 14, 160, 780, 8200],
                                    time: [2, 2, 2, 1, 1],
                                    price: [390, 4700, 57e3, 68e4]
                                }, {
                                    name: "Elf",
                                    color: "#a7d054",
                                    class: "⚔️",
                                    rarity: "Uncommon",
                                    cash: [5e3, 15e3, 15e4, 15e5, 1e7],
                                    time: [1, 1, 1, 1, 1],
                                    price: [8e5, 9e6, 11e7, 8e8]
                                }, {
                                    name: "Witch",
                                    color: "#4ab96d",
                                    class: "⚔️",
                                    rarity: "Uncommon",
                                    cash: [18e3, 6e4, 4e4, 4e6, 35e6],
                                    time: [3, 3, 2, 2, 2],
                                    price: [11e5, 12e6, 15e7, 14e8]
                                }, {
                                    name: "Wizard",
                                    color: "#5a459c",
                                    class: "⚔️",
                                    rarity: "Uncommon",
                                    cash: [19500, 65e3, 44e4, 46e5, 4e6],
                                    time: [3, 3, 2, 2, 2],
                                    price: [13e5, 135e5, 16e7, 16e8]
                                }, {
                                    name: "Fairy",
                                    color: "#df6d9c",
                                    class: "⚔️",
                                    rarity: "Uncommon",
                                    cash: [18500, 6e4, 62e4, 44e5, 38e6],
                                    time: [3, 3, 3, 2, 2],
                                    price: [12e5, 125e5, 15e6, 15e8]
                                }, {
                                    name: "Slime Monster",
                                    color: "#2fa04a",
                                    class: "⚔️",
                                    rarity: "Uncommon",
                                    cash: [35e3, 14e4, 1e6, 11e6, 11e7],
                                    time: [5, 5, 4, 4, 4],
                                    price: [16e5, 15e6, 2e8, 23e8]
                                }, {
                                    name: "Jester",
                                    color: "#be1e2d",
                                    class: "⚔️",
                                    rarity: "Rare",
                                    cash: [25e3, 1e5, 68e4, 65e5, 32e6],
                                    time: [3, 3, 2, 2, 1],
                                    price: [2e6, 21e6, 23e7, 26e8]
                                }, {
                                    name: "Dragon",
                                    color: "#2fa04a",
                                    class: "⚔️",
                                    rarity: "Rare",
                                    cash: [36e3, 15e4, 15e5, 15e6, 15e7],
                                    time: [4, 4, 4, 4, 4],
                                    price: [23e5, 24e6, 27e7, 3e9]
                                }, {
                                    name: "Unicorn",
                                    color: "#f6afce",
                                    class: "⚔️",
                                    rarity: "Epic",
                                    cash: [24e3, 15e4, 14e5, 7e6, 75e6],
                                    time: [2, 2, 2, 1, 1],
                                    price: [45e5, 45e6, 55e7, 65e8]
                                }, {
                                    name: "Queen",
                                    color: "#9e1f63",
                                    class: "⚔️",
                                    rarity: "Rare",
                                    cash: [24e3, 95e3, 95e4, 97e5, 95e6],
                                    time: [3, 3, 3, 3, 3],
                                    price: [19e5, 2e7, 23e7, 25e8]
                                }, {
                                    name: "King",
                                    color: "#ee2640",
                                    class: "⚔️",
                                    rarity: "Legendary",
                                    cash: [75e3, 4e5, 6e6, 9e7, 125e7],
                                    time: [5, 5, 5, 5, 5],
                                    price: [6e6, 95e6, 16e8, 25e9]
                                }, {
                                    name: "Two of Spades",
                                    color: "#414042",
                                    class: "🏰",
                                    rarity: "Uncommon",
                                    cash: [4500, 14e3, 14e4, 14e5, 9e6],
                                    time: [1, 1, 1, 1, 1],
                                    price: [77e4, 83e5, 98e6, 71e7]
                                }, {
                                    name: "Eat Me",
                                    color: "#d58c55",
                                    class: "🏰",
                                    rarity: "Uncommon",
                                    cash: [13e3, 45e3, 45e4, 45e5, 5e7],
                                    time: [2, 2, 2, 2, 2],
                                    price: [13e5, 14e6, 16e7, 2e9]
                                }, {
                                    name: "Drink Me",
                                    color: "#dd7399",
                                    class: "🏰",
                                    rarity: "Uncommon",
                                    cash: [12e3, 4e4, 4e5, 4e6, 45e6],
                                    time: [2, 2, 2, 2, 2],
                                    price: [12e5, 12e6, 14e7, 18e8]
                                }, {
                                    name: "Alice",
                                    color: "#4cc9f5",
                                    class: "🏰",
                                    rarity: "Uncommon",
                                    cash: [13e3, 42e3, 21e4, 21e5, 23e6],
                                    time: [2, 2, 1, 1, 1],
                                    price: [12e5, 13e6, 15e7, 19e8]
                                }, {
                                    name: "Queen of Hearts",
                                    color: "#d62027",
                                    class: "🏰",
                                    rarity: "Uncommon",
                                    cash: [23e3, 87e3, 62e4, 75e5, 9e7],
                                    time: [4, 4, 3, 3, 3],
                                    price: [13e5, 13e6, 18e7, 24e8]
                                }, {
                                    name: "Dormouse",
                                    color: "#89d6f8",
                                    class: "🏰",
                                    rarity: "Rare",
                                    cash: [17e3, 68e3, 7e5, 35e5, 35e6],
                                    time: [2, 2, 1, 1, 1],
                                    price: [2e6, 22e6, 25e7, 28e8]
                                }, {
                                    name: "White Rabbit",
                                    color: "#ffcd05",
                                    class: "🏰",
                                    rarity: "Rare",
                                    cash: [26e3, 105e3, 11e6, 77e5, 72e6],
                                    time: [3, 3, 3, 2, 2],
                                    price: [2e6, 23e6, 28e7, 29e8]
                                }, {
                                    name: "Cheshire Cat",
                                    color: "#dd7399",
                                    class: "🏰",
                                    rarity: "Rare",
                                    cash: [32e3, 1e5, 9e5, 9e6, 6e7],
                                    time: [4, 3, 3, 3, 2],
                                    price: [18e5, 19e6, 22e7, 24e8]
                                }, {
                                    name: "Caterpillar",
                                    color: "#00c0f3",
                                    class: "🏰",
                                    rarity: "Epic",
                                    cash: [1e4, 7e4, 65e4, 75e5, 85e6],
                                    time: [1, 1, 1, 1, 1],
                                    price: [42e5, 42e6, 54e7, 69e8]
                                }, {
                                    name: "Mad Hatter",
                                    color: "#914f93",
                                    class: "🏰",
                                    rarity: "Epic",
                                    cash: [38e3, 25e4, 15e5, 14e6, 8e7],
                                    time: [3, 3, 2, 2, 1],
                                    price: [48e5, 48e6, 52e7, 66e8]
                                }, {
                                    name: "King of Hearts",
                                    color: "#c62127",
                                    class: "🏰",
                                    rarity: "Legendary",
                                    cash: [8e4, 42e4, 68e5, 1e8, 15e8],
                                    time: [5, 5, 5, 5, 5],
                                    price: [7e6, 11e7, 18e8, 3e10]
                                }, {
                                    name: "Earth",
                                    color: "#416eb5",
                                    class: "🚀",
                                    rarity: "Uncommon",
                                    cash: [15e3, 45e3, 6e5, 65e5, 65e6],
                                    time: [3, 3, 3, 3, 3],
                                    price: [1e6, 11e6, 15e7, 17e8]
                                }, {
                                    name: "Meteor",
                                    color: "#c68c3c",
                                    class: "🚀",
                                    rarity: "Uncommon",
                                    cash: [23e3, 65e3, 7e5, 45e5, 2e7],
                                    time: [5, 4, 3, 2, 1],
                                    price: [95e4, 13e6, 16e7, 16e8]
                                }, {
                                    name: "Stars",
                                    color: "#19184d",
                                    class: "🚀",
                                    rarity: "Uncommon",
                                    cash: [1e4, 4e4, 2e5, 2e6, 18e6],
                                    time: [2, 2, 1, 1, 1],
                                    price: [14e5, 14e6, 15e7, 15e8]
                                }, {
                                    name: "Alien",
                                    color: "#8dc63f",
                                    class: "🚀",
                                    rarity: "Uncommon",
                                    cash: [3e4, 1e5, 1e6, 11e6, 85e6],
                                    time: [4, 4, 4, 4, 4],
                                    price: [15e5, 17e6, 19e7, 17e8]
                                }, {
                                    name: "Planet",
                                    color: "#9dc6ea",
                                    class: "🚀",
                                    rarity: "Rare",
                                    cash: [25e3, 1e5, 9e5, 9e6, 9e7],
                                    time: [3, 3, 3, 3, 3],
                                    price: [2e6, 21e6, 21e7, 24e8]
                                }, {
                                    name: "UFO",
                                    color: "#a15095",
                                    class: "🚀",
                                    rarity: "Rare",
                                    cash: [17e3, 7e4, 7e5, 7e6, 7e7],
                                    time: [2, 2, 2, 2, 2],
                                    price: [21e5, 23e6, 25e7, 28e8]
                                }, {
                                    name: "Spaceship",
                                    color: "#ffcb29",
                                    class: "🚀",
                                    rarity: "Epic",
                                    cash: [6e4, 32e4, 21e5, 15e6, 85e6],
                                    time: [5, 4, 3, 2, 1],
                                    price: [48e5, 46e6, 54e7, 68e8]
                                }, {
                                    name: "Astronaut",
                                    color: "#9bd4ee",
                                    class: "🚀",
                                    rarity: "Legendary",
                                    cash: [45e3, 26e4, 25e5, 38e6, 55e7],
                                    time: [3, 3, 2, 2, 2],
                                    price: [65e5, 1e8, 17e8, 27e9]
                                }, {
                                    name: "Lil Bot",
                                    color: "#3e564a",
                                    class: "🤖",
                                    rarity: "Uncommon",
                                    cash: [4e3, 12e3, 18e4, 19e5, 25e6],
                                    time: [1, 1, 1, 1, 1],
                                    price: [73e4, 12e6, 13e7, 19e8]
                                }, {
                                    name: "Lovely Bot",
                                    color: "#f179af",
                                    class: "🤖",
                                    rarity: "Uncommon",
                                    cash: [16e3, 65e3, 65e4, 48e5, 42e6],
                                    time: [3, 3, 3, 2, 2],
                                    price: [13e5, 14e6, 17e7, 16e8]
                                }, {
                                    name: "Angry Bot",
                                    color: "#f1613a",
                                    class: "🤖",
                                    rarity: "Uncommon",
                                    cash: [22e3, 85e3, 8e5, 62e5, 65e6],
                                    time: [4, 4, 4, 3, 3],
                                    price: [12e5, 13e6, 15e7, 17e8]
                                }, {
                                    name: "Happy Bot",
                                    color: "#51ba6b",
                                    class: "🤖",
                                    rarity: "Uncommon",
                                    cash: [11e3, 45e3, 5e5, 25e5, 3e7],
                                    time: [2, 2, 2, 1, 1],
                                    price: [14e5, 15e6, 18e7, 24e8]
                                }, {
                                    name: "Watson",
                                    color: "#d69b5a",
                                    class: "🤖",
                                    rarity: "Rare",
                                    cash: [24e3, 1e5, 1e6, 1e7, 1e8],
                                    time: [3, 3, 3, 3, 3],
                                    price: [2e6, 22e6, 24e7, 26e8]
                                }, {
                                    name: "Buddy Bot",
                                    color: "#9dc6ea",
                                    class: "🤖",
                                    rarity: "Rare",
                                    cash: [22e3, 95e3, 65e4, 65e5, 65e6],
                                    time: [3, 3, 2, 2, 2],
                                    price: [19e5, 21e6, 23e7, 25e8]
                                }, {
                                    name: "Brainy Bot",
                                    color: "#9ecf7a",
                                    class: "🤖",
                                    rarity: "Epic",
                                    cash: [5e4, 25e4, 21e5, 21e6, 17e7],
                                    time: [4, 3, 3, 3, 2],
                                    price: [5e6, 46e6, 5e8, 67e8]
                                }, {
                                    name: "Mega Bot",
                                    color: "#d71f27",
                                    class: "🤖",
                                    rarity: "Legendary",
                                    cash: [8e4, 43e4, 42e5, 62e6, 1e9],
                                    time: [5, 5, 3, 3, 3],
                                    price: [7e6, 12e7, 19e8, 35e9]
                                }].find(function({
                                    name: e
                                }) {
                                    return e.toLowerCase() == this
                                }, prompt("Enter blook name:").toLowerCase());
                            t ? (10 <= e.state.blooks.length && alert("Choose a blook to replace"), e.chooseBlook(t)) : alert("That is not a valid blook!")
                        }
                    }, {
                        name: "Free Upgrades",
                        description: "Sets upgrade prices to 0 for all current blooks",
                        run: function() {
                            var e = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
                            e.setState(e => ({
                                ...e,
                                blooks: e.blooks.map(e => ({
                                    ...e,
                                    price: [0, 0, 0, 0]
                                }))
                            }))
                        }
                    }, {
                        name: "Max Blooks",
                        description: "Maxes out all your blooks' levels",
                        run: function() {
                            Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.blooks.forEach(e => e.level = 4)
                        }
                    }, {
                        name: "Remove Glitches",
                        description: "Removes all enemy glitches",
                        run: function() {
                            var e = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
                            e.setState({
                                bits: 0,
                                ads: [],
                                hazards: [],
                                color: "",
                                lol: !1,
                                joke: !1,
                                slow: !1,
                                dance: !1,
                                glitch: "",
                                glitcherName: "",
                                glitcherBlook: ""
                            }), clearTimeout(e.adTimeout), clearInterval(e.hazardInterval), clearTimeout(e.nightTimeout), clearTimeout(e.glitchTimeout), clearTimeout(e.lolTimeout), clearTimeout(e.jokeTimeout), clearTimeout(e.slowTimeout), clearTimeout(e.danceTimeout), clearTimeout(e.nameTimeout)
                        }
                    }, {
                        name: "Send Glitch",
                        description: "Sends a glitch to everyone else playing",
                        run: function() {
                            var e = document.createElement("iframe"),
                                e = (document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner)["stateNode"],
                                t = {
                                    lb: "Lunch Break",
                                    as: "Ad Spam",
                                    e37: "Error 37",
                                    nt: "Night Time",
                                    lo: "#LOL",
                                    j: "Jokester",
                                    sm: "Slow Mo",
                                    dp: "Dance Party",
                                    v: "Vortex",
                                    r: "Reverse",
                                    f: "Flip",
                                    m: "Micro"
                                },
                                a = Object.keys(t)[Math.floor(Math.random() * Object.keys(t).length)];
                            e.safe = !0, e.props.liveGameController.setVal({
                                path: `c/${e.props.client.name}/tat`,
                                val: a
                            }), alert(`Sent a ${t[a]} glitch`)
                        }
                    }, {
                        name: "Set All MegaBot",
                        description: "Sets all your blooks to maxed out Mega Bots",
                        run: function() {
                            Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.setState({
                                blooks: new Array(10).fill({
                                    name: "Mega Bot",
                                    color: "#d71f27",
                                    class: "🤖",
                                    rarity: "Legendary",
                                    cash: [8e4, 43e4, 42e5, 62e6, 1e9],
                                    time: [5, 5, 3, 3, 3],
                                    price: [7e6, 12e7, 19e8, 35e9],
                                    active: !1,
                                    level: 4,
                                    bonus: 5.5
                                })
                            })
                        }
                    }, {
                        name: "Set Cash",
                        description: "Sets amount of cash you have",
                        run: function() {
                            var e = document.createElement("iframe"),
                                e = (document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Number(parseInt(prompt("How much cash would you like?")))),
                                t = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
                            t.setState({
                                cash: e
                            })
                        }
                    }],
                    fishing: [{
                        name: "Frenzy",
                        description: "Sets everyone to frenzy mode",
                        run: function() {
                            var e = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
                            e.props.liveGameController.setVal({
                                path: "c/" + e.props.client.name,
                                val: {
                                    b: e.props.client.blook,
                                    w: e.state.weight,
                                    f: "Frenzy",
                                    s: !0
                                }
                            })
                        }
                    }, {
                        name: "Remove Distractions",
                        description: "Removes distractions",
                        type: "toggle",
                        enabled: !1,
                        data: null,
                        run: function() {
                            this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                                Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.setState({
                                    party: ""
                                })
                            }, 50))
                        }
                    }, {
                        name: "Send Distraction",
                        description: "Sends a distraction to everyone",
                        run: function() {
                            var e = document.createElement("iframe"),
                                e = (document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner)["stateNode"],
                                t = ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"][Math.floor(9 * Math.random())];
                            e.safe = !0, e.props.liveGameController.setVal({
                                path: "c/" + e.props.client.name,
                                val: {
                                    b: e.props.client.blook,
                                    w: e.state.weight,
                                    f: t,
                                    s: !0
                                }
                            }), alert(`Sent a ${t} distraction`)
                        }
                    }, {
                        name: "Set Lure",
                        description: "Sets fishing lure (range 1 - 5)",
                        run: function() {
                            var e = document.createElement("iframe");
                            document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.setState({
                                lure: Math.max(Math.min(Number(parseInt(prompt("What would you like to set your lure to? (1 - 5)"))) - 1, 4), 0)
                            })
                        }
                    }, {
                        name: "Set Weight",
                        description: "Sets weight",
                        run: function() {
                            var e = document.createElement("iframe"),
                                e = (document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Number(parseInt(prompt("How much weight would you like?")))),
                                t = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
                            t.setState({
                                weight: e,
                                weight2: e
                            }), t.props.liveGameController.setVal({
                                path: "c/" + t.props.client.name,
                                val: {
                                    b: t.props.client.blook,
                                    w: e,
                                    f: ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"][Math.floor(9 * Math.random())]
                                }
                            })
                        }
                    }],
                    flappy: [{
                        name: "Toggle Ghost",
                        description: "Lets you go through the pipes",
                        type: "toggle",
                        enabled: !1,
                        run: function() {
                            this.enabled = !this.enabled, Object.values(document.querySelector("#phaser-bouncy"))[1].children[0]._owner.stateNode.state.game.scene.physics.world.bodies.entries.forEach(e => e.gameObject.frame.texture.key.startsWith("blook") && (e.checkCollision.none = this.enabled, e.gameObject.setAlpha(this.enabled ? .5 : 1)))
                        }
                    }, {
                        name: "Set Score",
                        description: "Sets flappy blook score",
                        run: function() {
                            var e = document.createElement("iframe");
                            document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Object.values(document.querySelector("#phaser-bouncy"))[1].children[0]._owner.stateNode.setState({
                                score: parseFloat("0" + prompt("What do you want to set your score to?"))
                            })
                        }
                    }],
                    gold: [{
                        name: "Always Triple",
                        description: "Always get triple gold",
                        type: "toggle",
                        enabled: !1,
                        data: null,
                        run: function() {
                            let t = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
                            t._choosePrize ||= t.choosePrize, this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null, t.choosePrize = t._choosePrize || t.choosePrize) : (this.enabled = !0, this.data = setInterval(() => {
                                t.choosePrize = function(e) {
                                    t.state.choices[e] = {
                                        type: "multiply",
                                        val: 3,
                                        text: "Triple Gold!",
                                        blook: "Unicorn"
                                    }, t._choosePrize(e)
                                }
                            }, 50))
                        }
                    }, {
                        name: "Auto Choose",
                        description: "Automatically picks the option that would give you the most gold",
                        type: "toggle",
                        enabled: !1,
                        data: null,
                        run: function() {
                            this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(async () => {
                                try {
                                    let o = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
                                    if ("prize" === o.state.stage) {
                                        var n = Object.entries(await new Promise(t => o.props.liveGameController.getDatabaseVal("c", e => e && t(e))) || []).filter(e => e[0] != o.props.client.name).sort((e, t) => t[1].g - e[1].g)[0]?.[1]?.g || 0;
                                        let a = 0;
                                        index = -1;
                                        for (let t = 0; t < o.state.choices.length; t++) {
                                            var {
                                                type: r,
                                                val: i
                                            } = o.state.choices[t];
                                            let e = o.state.gold;
                                            switch (r) {
                                                case "gold":
                                                    e = o.state.gold + i || o.state.gold;
                                                    break;
                                                case "multiply":
                                                case "divide":
                                                    e = Math.round(o.state.gold * i) || o.state.gold;
                                                    break;
                                                case "swap":
                                                    e = n || o.state.gold;
                                                case "take":
                                                    e = o.state.gold + n * i || o.state.gold
                                            }(e || 0) <= a || (a = e, index = t + 1)
                                        }
                                        document.querySelector(`div[class^='styles__choice${index}']`).click()
                                    }
                                } catch {}
                            }, 50))
                        }
                    }, {
                        name: "Chest ESP",
                        description: "Shows what each chest will give you",
                        type: "toggle",
                        enabled: !1,
                        data: null,
                        run: function() {
                            this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                                Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.choices.forEach(({
                                    text: e
                                }, t) => {
                                    var a, t = document.querySelector(`div[class^='styles__choice${t+1}']`);
                                    t && !t.querySelector("div") && ((a = document.createElement("div")).style.color = "white", a.style.fontFamily = "Eczar", a.style.fontSize = "2em", a.style.display = "flex", a.style.justifyContent = "center", a.style.transform = "translateY(200px)", a.innerText = e, t.append(a))
                                })
                            }, 50))
                        }
                    }, {
                        name: "Reset Players Gold",
                        description: "Sets a player's gold to 0",
                        run: function() {
                            var e = document.createElement("iframe");
                            document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove();
                            let t = prompt("Who's gold would you like to reset?"),
                                {
                                    props: a,
                                    state: o
                                } = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
                            stateNode.props.liveGameController.getDatabaseVal("c", e => {
                                e && Object.keys(e).map(e => e.toLowerCase()).includes(t.toLowerCase()) && a.liveGameController.setVal({
                                    path: "c/".concat(a.client.name),
                                    val: {
                                        b: a.client.blook,
                                        g: o.gold,
                                        tat: t + ":swap:0"
                                    }
                                })
                            })
                        }
                    }, {
                        name: "Set Gold",
                        description: "Sets amount of gold",
                        run: function() {
                            var e = document.createElement("iframe"),
                                e = (document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Number(parseInt(prompt("How much gold would you like?")))),
                                t = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
                            t.setState({
                                gold: e,
                                gold2: e
                            }), t.props.liveGameController.setVal({
                                path: "c/".concat(t.props.client.name),
                                val: {
                                    b: t.props.client.blook,
                                    g: e
                                }
                            })
                        }
                    }, {
                        name: "Swap Gold",
                        description: "Swaps gold with someone",
                        run: function() {
                            let t = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
                            t.props.liveGameController.getDatabaseVal("c", e => {
                                t.setState({
                                    players: e ? Object.entries(e).map(([e, {
                                        b: t,
                                        g: a
                                    }]) => ({
                                        name: e,
                                        blook: t,
                                        gold: a || 0
                                    })).filter(e => e.name != t.props.client.name).sort(({
                                        gold: e
                                    }, {
                                        gold: t
                                    }) => t - e) : [],
                                    ready: !0,
                                    phaseTwo: !0,
                                    stage: "prize",
                                    choiceObj: {
                                        type: "swap"
                                    }
                                })
                            })
                        }
                    }, {
                        name: "Reset All Players' Gold",
                        description: "Set's everyone else's gold to 0",
                        run: function() {
                            var e = document.createElement("iframe");
                            document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove();
                            let {
                                props: a,
                                state: o
                            } = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"], n = 0;
                            a.liveGameController.getDatabaseVal("c", async e => {
                                if (e)
                                    for (const t of Object.keys(e)) a.liveGameController.setVal({
                                        path: "c/".concat(a.client.name),
                                        val: {
                                            b: a.client.blook,
                                            g: o.gold,
                                            tat: t + ":swap:0"
                                        }
                                    }), n++, await new Promise(e => setTimeout(e, 4e3));
                                alert(`Reset ${n} players' gold!`)
                            })
                        }
                    }],
                    kingdom: [{
                        name: "Choice ESP",
                        description: "Shows you what will happen if you say Yes or No",
                        type: "toggle",
                        enabled: !1,
                        data: null,
                        run: function() {
                            if (this.enabled) this.enabled = !1, clearInterval(this.data), Array.from(document.getElementsByClassName("choiceESP")).forEach(e => e.remove()), this.data = null;
                            else {
                                this.enabled = !0;
                                let a = ["materials", "people", "happiness", "gold"],
                                    o = Object.fromEntries([...document.querySelectorAll("[class^=styles__statContainer]")].map((e, t) => [a[t], e]));
                                this.data = setInterval(() => {
                                    var {
                                        guest: e,
                                        phase: t
                                    } = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state;
                                    "choice" == t && (Array.from(document.getElementsByClassName("choiceESP")).forEach(e => e.remove()), Object.entries(e.yes || {}).forEach(e => {
                                        var t;
                                        "msg" != e[0] && a.includes(e[0]) && ((t = document.createElement("div")).className = "choiceESP", t.style = "font-size: 24px; color: rgb(75, 194, 46); font-weight: bolder;", t.innerText = String(e[1]), o[e[0]].appendChild(t))
                                    }), Object.entries(e.no || {}).forEach(e => {
                                        var t;
                                        "msg" != e[0] && a.includes(e[0]) && ((t = document.createElement("div")).className = "choiceESP", t.style = "font-size: 24px; color: darkred; font-weight: bolder;", t.innerText = String(e[1]), o[e[0]].appendChild(t))
                                    }))
                                }, 50)
                            }
                        }
                    }, {
                        name: "Disable Tax Toucan",
                        description: "Tax evasion",
                        run: function() {
                            Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.taxCounter = Number.MAX_VALUE
                        }
                    }, {
                        name: "Max Stats",
                        description: "Sets all resources to the max",
                        run: function() {
                            Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.setState({
                                materials: 100,
                                people: 100,
                                happiness: 100,
                                gold: 100
                            })
                        }
                    }, {
                        name: "Set Guests",
                        description: "Sets the amount of guests you've seen",
                        run: function() {
                            var e = document.createElement("iframe"),
                                e = (document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Number(parseInt(prompt("How many guests do you want?"))));
                            Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.setState({
                                guestScore: e
                            })
                        }
                    }, {
                        name: "Skip Guest",
                        description: "Skips the current guest",
                        run: function() {
                            Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.nextGuest()
                        }
                    }],
                    racing: [{
                        name: "Instant Win",
                        description: "Instantly Wins the race",
                        run: function() {
                            const e = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
                            e.setState({
                                progress: e.state.goalAmount
                            }, () => {
                                const {
                                    question: a
                                } = e["state"];
                                try {
                                    [...document.querySelectorAll('[class*="answerContainer"]')][a.answers.map((e, t) => a.correctAnswers.includes(e) ? t : null).filter(e => null != e)[0]]?.click?.()
                                } catch {}
                            })
                        }
                    }],
                    royale: [{
                        name: "Auto Answer (Toggle)",
                        description: "Toggles auto answer on",
                        type: "toggle",
                        enabled: !1,
                        data: null,
                        run: function() {
                            this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                                var e = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
                                e?.onAnswer?.(!0, e.props.client.question.correctAnswers[0])
                            }, 50))
                        }
                    }, {
                        name: "Auto Answer",
                        description: "Chooses the correct answer for you",
                        run: function() {
                            var e = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
                            e?.onAnswer?.(!0, e.props.client.question.correctAnswers[0])
                        }
                    }],
                    rush: [{
                        name: "Set Blooks",
                        description: "Sets amount of blooks you or your team has",
                        run: function() {
                            var e = document.createElement("iframe"),
                                e = (document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Number(parseInt(prompt("How many blooks do you want?")))),
                                t = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
                            t.setState({
                                numBlooks: e
                            }), t.isTeam ? t.props.liveGameController.setVal({
                                path: `a/${t.props.client.name}/bs`,
                                val: e
                            }) : t.props.liveGameController.setVal({
                                path: `c/${t.props.client.name}/bs`,
                                val: numDefense
                            })
                        }
                    }, {
                        name: "Set Defense",
                        description: "Sets amount of defense you or your team has (Max 4)",
                        run: function() {
                            var e = document.createElement("iframe"),
                                e = (document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Math.min(Number(parseInt(prompt("How much defense do you want? (Max 4)"))), 4)),
                                t = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
                            t.setState({
                                numDefense: e
                            }), t.isTeam ? t.props.liveGameController.setVal({
                                path: `a/${t.props.client.name}/d`,
                                val: e
                            }) : t.props.liveGameController.setVal({
                                path: `c/${t.props.client.name}/d`,
                                val: e
                            })
                        }
                    }],
                    workshop: [{
                        name: "Remove Distractions",
                        description: "Removes all enemy distractions",
                        run: function() {
                            Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.setState({
                                fog: !1,
                                dusk: !1,
                                wind: !1,
                                plow: !1,
                                blizzard: !1,
                                force: !1,
                                canada: !1,
                                trees: [!1, !1, !1, !1, !1, !1, !1, !1, !1, !1]
                            })
                        }
                    }, {
                        name: "Send Distraction",
                        description: "Sends a distraction to everyone else playing",
                        run: function() {
                            var e = document.createElement("iframe"),
                                e = (document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner)["stateNode"],
                                t = {
                                    c: "Oh Canada",
                                    b: "Blizzard",
                                    f: "Fog Spell",
                                    d: "Dark & Dusk",
                                    w: "Howling Wind",
                                    g: "Gift Time!",
                                    t: "TREES",
                                    s: "Snow Plow",
                                    fr: "Use The Force"
                                },
                                a = Object.keys(t)[Math.floor(Math.random() * Object.keys(t).length)];
                            e.safe = !0, e.props.liveGameController.setVal({
                                path: `c/${e.props.client.name}/tat`,
                                val: a
                            }), alert(`Sent a ${t[a]} distraction`)
                        }
                    }, {
                        name: "Set Toys",
                        description: "Sets amount of toys",
                        run: function() {
                            var e = document.createElement("iframe"),
                                e = (document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), parseInt(prompt("How many toys would you like?"))),
                                t = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
                            t.setState({
                                toys: e
                            }), t.props.liveGameController.setVal({
                                path: "c/".concat(t.props.client.name),
                                val: {
                                    b: t.props.client.blook,
                                    t: e
                                }
                            })
                        }
                    }, {
                        name: "Set Toys Per Question",
                        description: "Sets amount of toys per question",
                        run: function() {
                            var e = document.createElement("iframe");
                            document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.setState({
                                toysPerQ: parseInt(prompt("How many toys per question would you like?"))
                            })
                        }
                    }, {
                        name: "Swap Toys",
                        description: "Swaps toys with someone",
                        run: function() {
                            let t = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
                            t.props.liveGameController.getDatabaseVal("c", e => {
                                t.setState({
                                    choosingPlayer: !1,
                                    players: e ? Object.entries(e).map(([e, {
                                        b: t,
                                        t: a
                                    }]) => ({
                                        name: e,
                                        blook: t,
                                        toys: a || 0
                                    })).filter(e => e.name != t.props.client.name).sort(({
                                        toys: e
                                    }, {
                                        toys: t
                                    }) => t - e) : [],
                                    phaseTwo: !0,
                                    stage: "prize",
                                    choiceObj: {
                                        type: "swap"
                                    }
                                }, () => setTimeout(() => t.setState({
                                    choosingPlayer: !0
                                }), 300))
                            })
                        }
                    }]
                });
            var d = document.createElement("details");
            d.innerHTML = '<summary style="padding: 10px; font-size: 1.5em; font-weight: bolder">Global</summary>';
            for (let t of a.global) {
                let e = m(t.name);
                e.style.backgroundColor = "toggle" == t.type ? t.enabled ? "#47A547" : "#A02626" : "hsl(0, 0%, 20%)", e.onclick = () => {
                    try {
                        t.run()
                    } finally {
                        e.style.backgroundColor = "toggle" == t.type ? t.enabled ? "#47A547" : "#A02626" : "hsl(0, 0%, 20%)"
                    }
                }, d.appendChild(e)
            }
            d.open = !1, d.style.paddingBottom = "10px", c.appendChild(d);
            let o = document.createElement("div");
            c.appendChild(o), console.log(a);
            const b = e => {
                if (e && a[e])
                    for (let t of a[e]) {
                        let e = m(t.name);
                        e.style.backgroundColor = "toggle" == t.type ? t.enabled ? "#47A547" : "#A02626" : "hsl(0, 0%, 20%)", e.onclick = () => {
                            try {
                                t.run()
                            } finally {
                                e.style.backgroundColor = "toggle" == t.type ? t.enabled ? "#47A547" : "#A02626" : "hsl(0, 0%, 20%)"
                            }
                        }, o.appendChild(e), o.appendChild(document.createElement("br"))
                    }
            };
            setTimeout(() => b(u()), 50);
            var p = function(e) {
                let t = window.location.pathname;
                const a = setInterval(() => {
                    window.location.pathname != t && (t = window.location.pathname, e(t))
                }, 50);
                return () => clearInterval(a)
            }(e => {
                var t = u();
                curPageEl.innerText = u(!0) ? "Current gamemode: " + u(!0) : "No game detected", o.innerHTML = "", b(t)
            });

            function m(e) {
                var t = document.createElement("button");
                return t.classList.add("cheat"), t.innerText = e, t
            }

            function u(e) {
                switch (window.location.pathname) {
                    case "/play/racing":
                        return e ? "Racing" : "racing";
                    case "/play/factory":
                        return e ? "Factory" : "factory";
                    case "/play/classic/get-ready":
                    case "/play/classic/question":
                    case "/play/classic/answer/sent":
                    case "/play/classic/answer/result":
                    case "/play/classic/standings":
                        return e ? "Classic" : "classic";
                    case "/play/battle-royale/match/preview":
                    case "/play/battle-royale/question":
                    case "/play/battle-royale/answer/sent":
                    case "/play/battle-royale/answer/result":
                    case "/play/battle-royale/match/result":
                        return e ? "Battle Royale" : "royale";
                    case "/play/toy":
                        return e ? "Santa's Workshop" : "workshop";
                    case "/play/gold":
                        return e ? "Gold Quest" : "gold";
                    case "/play/brawl":
                        return e ? "Monster Brawl" : "brawl";
                    case "/play/hack":
                        return e ? "Crypto Hack" : "hack";
                    case "/play/fishing":
                        return e ? "Fishing Frenzy" : "fishing";
                    case "/play/rush":
                        return e ? "Blook Rush" : "rush";
                    case "/play/dino":
                        return e ? "Deceptive Dinos" : "dino";
                    case "/tower/map":
                    case "/tower/battle":
                    case "/tower/rest":
                    case "/tower/risk":
                    case "/tower/shop":
                    case "/tower/victory":
                        return e ? "Tower of Doom" : "doom";
                    case "/cafe":
                    case "/cafe/shop":
                        return e ? "Cafe" : "cafe";
                    case "/defense":
                        return e ? "Tower Defense" : "defense";
                    case "/play/defense2":
                        return e ? "Tower Defense 2" : "defense2";
                    case "/kingdom":
                        return e ? "Crazy Kingdom" : "kingdom";
                    default:
                        return !1
                }
            }

            function h(e) {
                "KeyE" == e.code && (v.hidden = !v.hidden)
            }
            addEventListener("keypress", h)
        }
    }
};
