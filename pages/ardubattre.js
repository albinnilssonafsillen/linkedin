import Image from 'next/image'

export default function Better() {
    return (
        <div class="App">
            <div>
                <h2>Är du egentligen så mycket bättre dårå?!</h2>
                <Image
                    src="/images/albin_shame.jpg"
                    width={650}
                    height={350}
                />
            </div>
        </div>
    );
}