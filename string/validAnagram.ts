function isAnagram(s: string, t: string): boolean {
    return (s.split('').sort().join() == t.split('').sort().join())
};

// if not allowed to use built in string functions then solution would be:
// use a hashtable with counts of each letter for both strings
// loop through a string and make sure hashtables match
