export default async function handler(req, res) {

    await fetch("https://saurav.tech/NewsAPI/everything/cnn.json")
        .then(response => response.json())
        .then(data => {
            res.status(200).json(data)
        }
        )
}
