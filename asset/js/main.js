

const Instances = (id, number) => {
    return `
    ! gcloud beta compute --project=${id} instances create instance-1 --zone=europe-west1-c --machine-type=n2-custom-6-24576 --subnet=default --network-tier=PREMIUM --maintenance-policy=MIGRATE --service-account=${number}-compute@developer.gserviceaccount.com --scopes=https://www.googleapis.com/auth/devstorage.read_only,https://www.googleapis.com/auth/logging.write,https://www.googleapis.com/auth/monitoring.write,https://www.googleapis.com/auth/servicecontrol,https://www.googleapis.com/auth/service.management.readonly,https://www.googleapis.com/auth/trace.append --image=ubuntu-1604-xenial-v20210429 --image-project=ubuntu-os-cloud --boot-disk-size=10GB --boot-disk-type=pd-balanced --boot-disk-device-name=instance-2 --no-shielded-secure-boot --shielded-vtpm --shielded-integrity-monitoring --reservation-affinity=any

    ! gcloud beta compute --project=${id} instances create instance-2 --zone=europe-west2-c --machine-type=n2-custom-6-24576 --subnet=default --network-tier=PREMIUM --maintenance-policy=MIGRATE --service-account=${number}-compute@developer.gserviceaccount.com --scopes=https://www.googleapis.com/auth/devstorage.read_only,https://www.googleapis.com/auth/logging.write,https://www.googleapis.com/auth/monitoring.write,https://www.googleapis.com/auth/servicecontrol,https://www.googleapis.com/auth/service.management.readonly,https://www.googleapis.com/auth/trace.append --image=ubuntu-1604-xenial-v20210429 --image-project=ubuntu-os-cloud --boot-disk-size=10GB --boot-disk-type=pd-balanced --boot-disk-device-name=instance-2 --no-shielded-secure-boot --shielded-vtpm --shielded-integrity-monitoring --reservation-affinity=any
    
    ! gcloud beta compute --project=${id} instances create instance-3 --zone=europe-west3-c --machine-type=n2-custom-6-24576 --subnet=default --network-tier=PREMIUM --maintenance-policy=MIGRATE --service-account=${number}-compute@developer.gserviceaccount.com --scopes=https://www.googleapis.com/auth/devstorage.read_only,https://www.googleapis.com/auth/logging.write,https://www.googleapis.com/auth/monitoring.write,https://www.googleapis.com/auth/servicecontrol,https://www.googleapis.com/auth/service.management.readonly,https://www.googleapis.com/auth/trace.append --image=ubuntu-1604-xenial-v20210429 --image-project=ubuntu-os-cloud --boot-disk-size=10GB --boot-disk-type=pd-balanced --boot-disk-device-name=instance-2 --no-shielded-secure-boot --shielded-vtpm --shielded-integrity-monitoring --reservation-affinity=any
    
    ! gcloud beta compute --project=${id} instances create instance-4 --zone=europe-west4-c --machine-type=n2-custom-6-24576 --subnet=default --network-tier=PREMIUM --maintenance-policy=MIGRATE --service-account=${number}-compute@developer.gserviceaccount.com --scopes=https://www.googleapis.com/auth/devstorage.read_only,https://www.googleapis.com/auth/logging.write,https://www.googleapis.com/auth/monitoring.write,https://www.googleapis.com/auth/servicecontrol,https://www.googleapis.com/auth/service.management.readonly,https://www.googleapis.com/auth/trace.append --image=ubuntu-1604-xenial-v20210429 --image-project=ubuntu-os-cloud --boot-disk-size=10GB --boot-disk-type=pd-balanced --boot-disk-device-name=instance-2 --no-shielded-secure-boot --shielded-vtpm --shielded-integrity-monitoring --reservation-affinity=any
    `
}

const connect1 = (id) => {
    return `gcloud beta compute ssh --zone "europe-west1-c" "instance-1"  --project "${id}"`
}
const connect2 = (id) => {
    return `gcloud beta compute ssh --zone "europe-west1-c" "instance-1"  --project "${id}"`
}
const connect3 = (id) => {
    return `gcloud beta compute ssh --zone "europe-west1-c" "instance-1"  --project "${id} "`
}
const connect4 = (id) => {
    return `gcloud beta compute ssh --zone "europe-west1-c" "instance-1"  --project "${id} "`
}

let i_btn = document.getElementById('Instances_btn')
let c1_btn = document.getElementById('connect1_btn')
let c2_btn = document.getElementById('connect2_btn')
let c3_btn = document.getElementById('connect3_btn')
let c4_btn = document.getElementById('connect4_btn')

let i_text = document.getElementById('Instances_text')
let c1_text = document.getElementById('connect1_text')
let c2_text = document.getElementById('connect2_text')
let c3_text = document.getElementById('connect3_text')
let c4_text = document.getElementById('connect4_text')

let id = document.getElementById('id')
let number = document.getElementById('number')
id.addEventListener('focus', () => {
    id.value = ''
    i_text.value = ''
    c1_text.value = ''
    c2_text.value = ''
    c3_text.value = ''
    c4_text.value = ''
})
number.addEventListener('focus', () => {
    number.value = ''
    i_text.value = ''
    c1_text.value = ''
    c2_text.value = ''
    c3_text.value = ''
    c4_text.value = ''
})

number.addEventListener('change', () => {
    i_text.value = Instances(id.value, number.value)
    c1_text.value = connect1(id.value)
    c2_text.value = connect2(id.value)
    c3_text.value = connect3(id.value)
    c4_text.value = connect4(id.value)
})

i_btn.addEventListener('click', async () => {
    i_text.select()
    document.execCommand("copy")
})
c1_btn.addEventListener('click', () => {
    c1_text.select()
    document.execCommand("copy")
})
c2_btn.addEventListener('click', () => {
    c2_text.select()
    document.execCommand("copy")
})
c3_btn.addEventListener('click', () => {
    c3_text.select()
    document.execCommand("copy")
})
c4_btn.addEventListener('click', () => {
    c4_text.select()
    document.execCommand("copy")
})