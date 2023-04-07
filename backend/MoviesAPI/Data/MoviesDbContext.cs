using Microsoft.EntityFrameworkCore;
namespace MoviesAPI.Data
{
    public class MoviesDbContext : DbContext
    {
        public MoviesDbContext(DbContextOptions<MoviesDbContext> options) : base(options) { }
        public DbSet<JoelHiltonMovieCollection> Movies { get; set; }
    }
}
