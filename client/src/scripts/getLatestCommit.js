function getLatestCommit() {
    const latestCommitDate = document.querySelector('.latest-commit');

    if (!latestCommitDate) {
        console.log('Latest commit date was not founed');
        return;
    }
    else {
        fetch('https://api.github.com/repos/kletskovg/kletskovg.tech/commits')
            .then(res => res.json())
            .then(res => {
                const commitDate = new Date(res[0].commit.author.date);

                const commitDay = commitDate.getDate();
                const commitMonth = commitDate.getMonth() + 1;
                const commitYear = commitDate.getFullYear();

                const dateStr = `${commitDay}.${commitMonth}.${commitYear}`;


                latestCommitDate.innerHTML = dateStr;
            })
            .catch(err => console.log(err))
    }
}

getLatestCommit();


