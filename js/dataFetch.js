fetch('http://indiana.jobs/jobs/feed/json?num_items=10')
    .then(response => response.json())
    .then(response => listOfJobLinks(response))

function listOfJobLinks(jobsArray) {
    console.log('Check out our new jobs!')

    jobsArray.forEach(function(job) {
        var jobUrl = document.createElement('h4')
        jobUrl.innerHTML = job.url

        document.querySelector('body').appendChild(jobUrl)
    })
}

$.get('http://swapi.co/api/planets/1/', response => console.log(response))

console.log('This comes first.')