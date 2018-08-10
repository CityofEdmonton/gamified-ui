const achievementsList = [
    {
        "id": 1,
        "view_permission": "everyone",
        "internal_name": "invite_users",
        "maxlevel": 1,
        "priority": 0,
        "hidden": false,
        "achievementcategory": "community",
        "levels": {
            "1": {
                "level": 1,
                "goals": {
                    "1": {
                        "goal_id": 1,
                        "goal_name": {
                            "de": "Lade 5 Freunde ein",
                            "en": "Invite 5 Users"
                        },
                        "goal_goal": 5,
                        "priority": 0,
                        "properties": {
                            "1": {
                                "property_id": 1,
                                "name": "name",
                                "value": null,
                                "value_translated": {
                                    "de": "Lade 5 Freunde ein",
                                    "en": "Invite 5 Users"
                                }
                            }
                        }
                    }
                },
                "rewards": {},
                "properties": {
                    "1": {
                        "property_id": 1,
                        "name": "name",
                        "value": null,
                        "value_translated": {
                            "de": "Die Community!",
                            "en": "The Community!"
                        }
                    },
                    "2": {
                        "property_id": 2,
                        "name": "xp",
                        "value": 100,
                        "value_translated": null
                    },
                    "3": {
                        "property_id": 3,
                        "name": "icon",
                        "value": "https://www.gamification-software.com/img/running.png",
                        "value_translated": null
                    }
                }
            }
        },
        "level": 0,
        "levels_achieved": {},
        "goals": {
            "1": {
                "goal_id": 1,
                "goal_name": {
                    "de": "Lade 5 Freunde ein",
                    "en": "Invite 5 Users"
                },
                "goal_goal": 5,
                "priority": 0,
                "properties": {
                    "1": {
                        "property_id": 1,
                        "name": "name",
                        "value": null,
                        "value_translated": {
                            "de": "Lade 5 Freunde ein",
                            "en": "Invite 5 Users"
                        }
                    }
                },
                "achieved": false,
                "value": 0
            }
        },
        "achievement_date": null
    },
    {
        "id": 2,
        "view_permission": "everyone",
        "internal_name": "fittest",
        "maxlevel": 100,
        "priority": 0,
        "hidden": false,
        "achievementcategory": "sports",
        "levels": {
            "1": {
                "level": 1,
                "goals": {
                    "2": {
                        "goal_id": 2,
                        "goal_name": {
                            "de": "Mache unter deinen Freunden am meisten Sportaktivitäten",
                            "en": "Do the most sport activities among your friends"
                        },
                        "goal_goal": 5,
                        "priority": 0,
                        "properties": {
                            "1": {
                                "property_id": 1,
                                "name": "name",
                                "value": null,
                                "value_translated": {
                                    "de": "Mache unter deinen Freunden am meisten Sportaktivitäten",
                                    "en": "Do the most sport activities among your friends"
                                }
                            }
                        }
                    }
                },
                "rewards": {
                    "3": {
                        "id": 3,
                        "reward_id": 1,
                        "name": "badge",
                        "value": "https://www.gamification-software.com/img/easel.png",
                        "value_translated": null
                    },
                    "4": {
                        "id": 4,
                        "reward_id": 2,
                        "name": "backgroud_image",
                        "value": "https://www.gamification-software.com/img/game-characters-622654.jpg",
                        "value_translated": null
                    }
                },
                "properties": {
                    "1": {
                        "property_id": 1,
                        "name": "name",
                        "value": null,
                        "value_translated": {
                            "de": "Der Fitteste!",
                            "en": "The Fittest!"
                        }
                    },
                    "2": {
                        "property_id": 2,
                        "name": "xp",
                        "value": 250,
                        "value_translated": null
                    },
                    "3": {
                        "property_id": 3,
                        "name": "icon",
                        "value": "https://www.gamification-software.com/img/colorwheel.png",
                        "value_translated": null
                    }
                }
            }
        },
        "level": 0,
        "levels_achieved": {},
        "goals": {
            "2": {
                "goal_id": 2,
                "goal_name": {
                    "de": "Mache unter deinen Freunden am meisten Sportaktivitäten",
                    "en": "Do the most sport activities among your friends"
                },
                "goal_goal": 5,
                "priority": 0,
                "properties": {
                    "1": {
                        "property_id": 1,
                        "name": "name",
                        "value": null,
                        "value_translated": {
                            "de": "Mache unter deinen Freunden am meisten Sportaktivitäten",
                            "en": "Do the most sport activities among your friends"
                        }
                    }
                },
                "achieved": false,
                "value": 0,
                "leaderboard": [
                    {
                        "user": {
                            "id": 3,
                            "additional_public_data": null
                        },
                        "value": 0,
                        "position": 0
                    },
                    {
                        "user": {
                            "id": 2,
                            "additional_public_data": null
                        },
                        "value": 0,
                        "position": 1
                    },
                    {
                        "user": {
                            "id": 1,
                            "additional_public_data": null
                        },
                        "value": 0,
                        "position": 2
                    }
                ],
                "leaderboard_position": 2
            }
        },
        "achievement_date": null
    }
]

class AchievementService {
    /**
     * 
     * @param {String} endpoint The url to hit for achievements.
     */
    constructor(endpoint) {
        this.endpoint = endpoint;
    }

    /**
     * Gets a specific achievements info.
     * @param {Number} id The id of the achievement to get information on.
     */
    get(id) {
        return achievementsList.find((element) => {
            return element.id === id;
        })
    }

    /**
     * Gets goals for a specific achievement.
     * @param {Number} id The achievement to get the goals of.
     */
    getGoals(id) {
        return this.get(id).goals;
    }

    /**
     * Gets a sepcific goal.
     * @param {Number} id The id of the achievement the goal resides in.
     * @param {*} goalId 
     */
    getGoal(id, goalId) {
        return this.getGoals(id)[goalId];
    }

    /**
     * Gets the progress of a given goal.
     * @param {Number} id The id of the achievement.
     * @param {*} goalId The id of the goal.
     */
    getGoalProgress(id, goalId) {
        return this.getGoal(id, goalId).value;
    }

    /**
     * Grabs all achievments.
     */
    getAll() {
        return achievementsList;
    }
}

export default AchievementService;