import getGroceries from "./getGroceries";

export default async function Home() {
  const result = await getGroceries();

  return (
    <div>
      {result.length
        ? result.map((grc) => (
            <div key={grc.id}>
              <p>{grc.name}</p>
              <div>
                <span>timestamp1: {grc.timestamp1.toISOString()}</span>
                <span>
                  timestamp2: {new Date(grc.timestamp2).toISOString()}
                </span>
                <span>
                  timestamp3: {new Date(grc.timestamp3 * 1000).toISOString()}
                </span>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
}
