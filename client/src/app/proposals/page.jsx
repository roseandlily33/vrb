const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export default async function ProposalsPage() {
	let proposals = [];
	try {
		const res = await fetch(`${API_URL}/api/proposals`);
		if (res.ok) {
			const j = await res.json();
			proposals = j.proposals || [];
		}
	} catch (err) {
		// swallow network errors for build-time rendering
		proposals = [];
	}

	return (
		<main style={{ padding: 20 }}>
			<h1>Proposals</h1>
			<ul>
				{proposals.map((p) => (
					<li key={p._id}>{p.title} — {p.proposalNumber}</li>
				))}
			</ul>
		</main>
	);
}
