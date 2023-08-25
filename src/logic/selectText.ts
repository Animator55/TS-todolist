export default function selectText (text, query) {
    if(query === "") return text 
    let cleanedQuery = query.replace(/(<([^>]+)>)/ig, '')
    var regex = new RegExp(cleanedQuery, "i");
    let selected = text.replace(regex, "<mark>$&</mark>")
    return selected
}