# teammate container of user input
class teammate():
    def __init__(self, name, email, school, phone_number, year, major, skills, languages, night_owl, 
        project_goal, hackathon_goal, hackathon_time, remote, personality):
        self.name = name
        self.email = email
        self.school = school
        self.phone_number = phone_number

        if year == 'Freshman':
            year_number = 1
        elif year == 'Sophomore':
            year_number = 2
        elif year == 'Junior':
            year_number = 3
        elif year == 'Senior':
            year_number = 4
        else:
            year_number = 5     
        self.year = year_number

        self.major = major
        self.skills = skills
        self.languages = languages # set
        self.night_owl = night_owl
        self.project_goal = project_goal # set
        self.hackathon_goal = hackathon_goal
        self.hackathon_time = hackathon_time
        self.remote = remote
        self.personality = personality
        self.matches = {}
        self.times_matched = 0

# read from database + create teammates
def read_from_database():
    x = 1

# matching function
def final_matches(matches_matrix, tot):
    for j in range(8):
        for i in range(len(tot)):
            match_next = True
            if tot[i].times_matched == 8:
                continue
            # find match
            compatibility = max(matches_matrix[i])
            index = matches_matrix[i].index(compatibility)

            # When match already exists
            if tot[index] in tot[i].matches:
                matches_matrix[i][index] = -1

            # if both are eligible to be matched
            elif tot[index].times_matched <= 8:
                matches_matrix[i][index] = -1
                tot[i].matches[tot[index]] = compatibility
                tot[i].times_matched += 1
                tot[index].matches[tot[i]] = compatibility
                tot[index].times_matched += 1
            
            # if second is fully matched, look for next possible match
            while(match_next):
                compatibility = max(matches_matrix[i])
                index = matches_matrix[i].index(compatibility)
                if tot[index].times_matched <= 8:
                    matches_matrix[i][index] = -1
                    tot[i].matches[tot[index]] = compatibility
                    tot[i].times_matched += 1
                    tot[index].matches[tot[i]] = compatibility
                    tot[index].times_matched += 1
                    match_next = False


# MAIN
tot = read_from_database()

matches_matrix = [[0] * len(tot) for i in range(len(tot))] #2d array of matches from between i and j

for i in range(len(tot)):
    match_temp = [0] * len(tot)
    for j in range(len(tot)):
        if i == j:
            count = -1
        if j != i:
            count = 0
            if(tot[i].school == tot[j].school):
                count += 2
            if(tot[i].year == tot[j].year):
                count += 1
            if(tot[i].major == tot[j].major):
                count += 1
            if(tot[i].night_owl == tot[j].night_owl):
                count += 1
            for x in range(len(tot[i].project_goal)):
                for y in range(len(tot[j].project_goal)):
                    if(tot[i].project_goal[x] == tot[j].project_goal[y]):
                        count += 1
                        break
            if(tot[i].hackathon_goal == tot[j]. hackathon_goal):
                count += 1
            if(tot[i].hackathon_time == tot[j]. hackathon_time):
                count += 2
            if(tot[i].remote == tot[j].remote):
                if(tot[i].remote == 0 and (tot[i].school) != tot[j].school):
                    count -= 20
                else:
                    count += 3
            if(tot[i].personality == 'ISTJ'):
                if(tot[j].personality == 'ISTJ'):
                    count += 3
                if(tot[j].personality == 'INTJ'):
                    count += 3
                if(tot[j].personality == 'ESTJ'):
                    count += 3
                if(tot[j].personality == 'ENTJ'):
                    count += 3
                if(tot[j].personality == 'ISFJ'):
                    count += 3
                if(tot[j].personality == 'ESFJ'):
                    count += 3
            if(tot[i].personality == 'ISFJ'):
                if(tot[j].personality == 'ISFJ'):
                    count += 3
                if(tot[j].personality == 'ESFJ'):
                    count += 3
                if(tot[j].personality == 'ISFP'):
                    count += 3
                if(tot[j].personality == 'ESFP'):
                    count += 3
                if(tot[j].personality == 'ISTJ'):
                    count += 3
                if(tot[j].personality == 'INTJ'):
                    count += 3
            if(tot[i].personality == 'INFJ'):
                if(tot[j].personality == 'INFJ'):
                    count += 3
                if(tot[j].personality == 'ENFJ'):
                    count += 3
                if(tot[j].personality == 'INFP'):
                    count += 3
                if(tot[j].personality == 'ENFP'):
                    count += 3
                if(tot[j].personality == 'ISTJ'):
                    count += 3
                if(tot[j].personality == 'INTJ'):
                    count += 3
            if(tot[i].personality == 'INTJ'):
                if(tot[j].personality == 'INTJ'):
                    count += 3
                if(tot[j].personality == 'ENTJ'):
                    count += 3
                if(tot[j].personality == 'INTP'):
                    count += 3
                if(tot[j].personality == 'ENTP'):
                    count += 3
                if(tot[j].personality == 'INFJ'):
                    count += 3
                if(tot[j].personality == 'ENFJ'):
                    count += 3
            if(tot[i].personality == 'ISTP'):
                if(tot[j].personality == 'ISTP'):
                    count += 3
                if(tot[j].personality == 'INTJ'):
                    count += 3
                if(tot[j].personality == 'ESTJ'):
                    count += 3
                if(tot[j].personality == 'ENTJ'):
                    count += 3
                if(tot[j].personality == 'ISFP'):
                    count += 3
                if(tot[j].personality == 'ESPF'):
                    count += 3
            if(tot[i].personality == 'ISFP'):
                if(tot[j].personality == 'ISFP'):
                    count += 3
                if(tot[j].personality == 'ESFP'):
                    count += 3
                if(tot[j].personality == 'ISFJ'):
                    count += 3
                if(tot[j].personality == 'ESFJ'):
                    count += 3
                if(tot[j].personality == 'ISTP'):
                    count += 3
                if(tot[j].personality == 'ESTP'):
                    count += 3
            if(tot[i].personality == 'INFP'):
                if(tot[j].personality == 'INFP'):
                    count += 3
                if(tot[j].personality == 'ENFP'):
                    count += 3
                if(tot[j].personality == 'INFJ'):
                    count += 3
                if(tot[j].personality == 'ENFJ'):
                    count += 3
                if(tot[j].personality == 'ISTP'):
                    count += 3
                if(tot[j].personality == 'ESTP'):
                    count += 3
            if(tot[i].personality == 'INTP'):
                if(tot[j].personality == 'INTP'):
                    count += 3
                if(tot[j].personality == 'ENTP'):
                    count += 3
                if(tot[j].personality == 'INTJ'):
                    count += 3
                if(tot[j].personality == 'ENTJ'):
                    count += 3
                if(tot[j].personality == 'INFJ'):
                    count += 3
                if(tot[j].personality == 'ENFJ'):
                    count += 3
            if(tot[i].personality == 'ESTJ'):
                if(tot[j].personality == 'ESTJ'):
                    count += 3
                if(tot[j].personality == 'ENTJ'):
                    count += 3
                if(tot[j].personality == 'ISTJ'):
                    count += 3
                if(tot[j].personality == 'INTJ'):
                    count += 3
                if(tot[j].personality == 'ESFJ'):
                    count += 3
                if(tot[j].personality == 'ISFJ'):
                    count += 3
            if(tot[i].personality == 'ESFJ'):
                if(tot[j].personality == 'ESFJ'):
                    count += 3
                if(tot[j].personality == 'ISFJ'):
                    count += 3
                if(tot[j].personality == 'ESFP'):
                    count += 3
                if(tot[j].personality == 'ISFP'):
                    count += 3
                if(tot[j].personality == 'ESTJ'):
                    count += 3
                if(tot[j].personality == 'ENTJ'):
                    count += 3
            if(tot[i].personality == 'ENFJ'):
                if(tot[j].personality == 'ENFJ'):
                    count += 3
                if(tot[j].personality == 'INFJ'):
                    count += 3
                if(tot[j].personality == 'ENFP'):
                    count += 3
                if(tot[j].personality == 'INFP'):
                    count += 3
                if(tot[j].personality == 'ESTJ'):
                    count += 3
                if(tot[j].personality == 'ENTJ'):
                    count += 3
            if(tot[i].personality == 'ENTJ'):
                if(tot[j].personality == 'ENTJ'):
                    count += 3
                if(tot[j].personality == 'INTJ'):
                    count += 3
                if(tot[j].personality == 'ENTP'):
                    count += 3
                if(tot[j].personality == 'INTP'):
                    count += 3
                if(tot[j].personality == 'ENFJ'):
                    count += 3
                if(tot[j].personality == 'INFJ'):
                    count += 3
            if(tot[i].personality == 'ESTP'):
                if(tot[j].personality == 'ESTP'):
                    count += 3
                if(tot[j].personality == 'ISTP'):
                    count += 3
                if(tot[j].personality == 'ESFP'):
                    count += 3
                if(tot[j].personality == 'ISFP'):
                    count += 3
                if(tot[j].personality == 'ESTJ'):
                    count += 3
                if(tot[j].personality == 'ENTJ'):
                    count += 3
            if(tot[i].personality == 'ESFP'):
                if(tot[j].personality == 'ESFP'):
                    count += 3
                if(tot[j].personality == 'ISFP'):
                    count += 3
                if(tot[j].personality == 'ESFJ'):
                    count += 3
                if(tot[j].personality == 'ISFJ'):
                    count += 3
                if(tot[j].personality == 'ESTP'):
                    count += 3
                if(tot[j].personality == 'ISTP'):
                    count += 3
            if(tot[i].personality == 'ENFP'):
                if(tot[j].personality == 'ENFP'):
                    count += 3
                if(tot[j].personality == 'INFP'):
                    count += 3
                if(tot[j].personality == 'ENFJ'):
                    count += 3
                if(tot[j].personality == 'INFJ'):
                    count += 3
                if(tot[j].personality == 'ESTP'):
                    count += 3
                if(tot[j].personality == 'ISTP'):
                    count += 3
            if(tot[i].personality == 'ENTP'):
                if(tot[j].personality == 'ENTP'):
                    count += 3
                if(tot[j].personality == 'INTP'):
                    count += 3
                if(tot[j].personality == 'ENTJ'):
                    count += 3
                if(tot[j].personality == 'INTJ'):
                    count += 3
                if(tot[j].personality == 'ENFP'):
                    count += 3
                if(tot[j].personality == 'INFP'):
                    count += 3

        match_temp[j] = count
    matches_matrix[i] = match_temp

final_matches(matches_matrix, tot)
